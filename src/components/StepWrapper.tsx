import React, { FC } from 'react';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Card } from '@material-ui/core';
import { Grid, Stepper } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { useStyles } from '../components/Music.styles';



interface StepWrapperProps {
    activeStep: number
}

export const StepWrapper: FC<StepWrapperProps> = ({ activeStep, children }) => {

    const classes = useStyles();

    const steps = ['Информация о треке', 'Загрузите обложку', 'Загрузите аудио'];

    return (
        <>
            <Stepper elevation={3} activeStep={activeStep}>
                {steps.map((item, i) =>
                    <Step key={i} completed={activeStep > i}>
                        <StepLabel>{item}</StepLabel>
                    </Step>
                )}
            </Stepper>
            <Box mt={3} mb={3}>
                <Grid container justify="center">
                    <Grid sm={12} item>
                        <Card elevation={3}>
                            <Box p={3}>{children}</Box>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
