import React from 'react';

import Typography from "@material-ui/core/Typography";

class MyFooter extends React.Component {

    render() {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © WeatherCap '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>

        );
    }
}

export { MyFooter };