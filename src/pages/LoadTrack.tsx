import { Box, Grid, Typography } from '@material-ui/core'
import React, { FC, useState } from 'react';
import { StepWrapper } from '../components/StepWrapper';
import { TextField } from '@material-ui/core';
import { useInput } from '../hooks/useInput';
import { FileUpload } from '../components/FileUpload';
import { db, storage } from '../firebase';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
export const LoadTrack: FC = () => {

    const history = useHistory();

    const [activeStep, setActiveStep] = useState<number>(0);

    const [audio, setAudio] = useState(Object);

    const name = useInput('');
    const artist = useInput('');
    const picture = useInput('');

    const addToDatabase = async () => {
        const ref = storage.ref(`media/${audio.name}`);
        ref.put(audio).then(snapshot => {
            console.log('Upload success:' + snapshot.totalBytes);
            snapshot.ref.getDownloadURL().then(url => {
                db.collection('tracks').add({
                    name: name.value,
                    artist: artist.value,
                    img: picture.value,
                    audio: url
                })
            });
            history.push('/music');
        }).catch(err => console.log(err))
    }

    const next = () => {
        if (activeStep === 2) {
            addToDatabase();
        } else {
            setActiveStep(prev => prev + 1);
        }
    }

    const back = () => activeStep <= 0 ? setActiveStep(0) : setActiveStep(prev => prev - 1);

    return (
        <div>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                    <Grid container direction="column">
                        <Box mb={3}>
                            <TextField {...name} variant="outlined" label="Название трека" fullWidth />
                        </Box>
                        <Box>
                            <TextField {...artist} variant="outlined" label="Исполнитель" fullWidth />
                        </Box>
                    </Grid>
                }
                {activeStep === 1 &&
                    <Grid container direction="column">
                        <Box mb={3}>
                            <TextField {...picture} variant="outlined" label="Добавьте ссылку на изображение" fullWidth />
                        </Box>
                    </Grid>
                }
                {activeStep === 2 &&
                    <FileUpload setFile={setAudio} accept="audio/*">
                        <Button variant="outlined">Загрузить аудио</Button>
                    </FileUpload>
                }
            </StepWrapper>
            <Button onClick={back} variant="contained" color="primary">Назад</Button>
            <Button onClick={next}>Далее</Button>
        </div>
    )
}
