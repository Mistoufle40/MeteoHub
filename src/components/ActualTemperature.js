import React from 'react';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

export default function ActualTemperature() {

    return (
        <React.Fragment>
            <Title>Actual Temperature</Title>
            <Typography component="p" variant="h2" align={"center"}>
                17°c
            </Typography>
        </React.Fragment>
    );
}