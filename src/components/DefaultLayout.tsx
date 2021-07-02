import { Container } from '@material-ui/core';
import React, { FC, ReactChild } from 'react';
import { Navbar } from './Navbar';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';


interface DefaultLayoutProps {
    children: ReactChild
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            margin: '90px auto 0px auto'
        }
    })
);

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {

    const classes = useStyles();

    return (
        <>
            <Navbar />
            <Container className={classes.container}>
                {children}
            </Container>
        </>
    );
}
