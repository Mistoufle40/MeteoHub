import React from 'react';
import Typography from '@material-ui/core/Typography';

import Title from './Title';


export default function ActualWind() {

    return (
        <React.Fragment>
            <Title>Actual Speed Wind</Title>
            <Typography component="p"
                        variant="h3"
                        align={"center"}
            >
                0 km/h
            </Typography>
        </React.Fragment>
    );
}