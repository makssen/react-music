import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        musicItemCard: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: 120,
            marginBottom: 30
        },
        media: {
            width: 200,
            height: '100%'
        },
        musicDiscription: {
            width: 200,
            margin: '0px 30px'
        },
        btn: {
            fontSize: 24,
            color: '#673ab7'
        },
        grid: {
            margin: 30
        },
        perview: {
            height: '72vh'
        },
        perviewImg: {
            height: '100%',
            width: 280,
            objectFit: 'cover'
        },
        input: {
            marginBottom: 20
        },
        loadCard: {
            margin: 30
        },
        player: {
            height: 60,
            width: '90%',
            position: 'fixed',
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            padding: '0 10px',
            backgroundColor: 'lightgray'
        }
    })
);