import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";

const styleSheet = makeStyles((theme) => ({
    flex: {
        display: 'flex',
    },
    space: {
        marginRight: theme.spacing('left'),
    }
}));

export function WeatherDetails(props) {
    const classes = styleSheet;
    const result = props.data;

    const humidity = Math.round(89);
    const windSpeed = 3.14;
    const windDegree= 38;
    const cloudiness = Math.round(0);
    const pressure = Math.round(1006);

    return (
        <div className={classes.root}>
            <div className={classes.flex}>
                <Typography variant={"h8"} className={classes.space} >
                    Humidity:
                </Typography>
                <Typography variant={"h8"}>
                    {` ${humidity}%`}
                </Typography>
            </div>

            <div className={classes.flex}>
                <Typography variant={"h8"} className={classes.space} >
                    Wind:
                </Typography>
                <Typography variant={"h8"}  >
                    {` ${windSpeed} Km/h ${windDegree}°`}
                </Typography>
            </div>

            <div className={classes.flex}>
                <Typography variant={"h8"} className={classes.space} >
                    Cloudiness:
                </Typography>
                <Typography variant={"h8"}  >
                    {` ${cloudiness}%`}
                </Typography>
            </div>
            <div className={classes.flex}>
                <Typography variant={"h8"} className={classes.space} >
                    Pressure:
                </Typography>
                <Typography variant={"h8"}  >
                    {` ${pressure} hPa`}
                </Typography>
            </div>
        </div>
    );
}

WeatherDetails.propTypes = {
    classes: PropTypes.object.isRequired,
};