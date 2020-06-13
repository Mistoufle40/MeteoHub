import React from 'react';

import {MyHeaderBar} from './MyHeaderBar';
import {MyFooter} from './MyFooter';
import {CurrentWeatherIcon} from '../components/CurrentWeatherIcon'
import {WeatherDetails} from '../components/WeatherDetails'
import LocalisationBar from "../components/LocalisationBar"


import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';

import clsx from "clsx";
import CssBaseline from '@material-ui/core/CssBaseline';
import {useStyles} from "../components/useStyles";
import Clock from "../components/Clock";


export function HomePage(props) {
    const classes = useStyles();
    const result = props.data;
    const cityName = result.name;
    //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    var today = new Date();

    var weatherDescription;

    if (result.weather)
         weatherDescription = capitalizeFirstLetter(result.weather[0]?.description);
    else
         weatherDescription = capitalizeFirstLetter("Can't fetch information");

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <MyHeaderBar/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth="lg" className={classes.container}>
                    <Typography type="display3">
                        {`${cityName}`}
                    </Typography>
                    <Typography type="display1">
                        {`${today.toDateString()} `}
                        <Clock/>
                    </Typography>
                    <Typography type="display1">
                        {weatherDescription}
                    </Typography>
                    <Typography type="display1">
                        <LocalisationBar data={result} classes={classes} onCoordinates={props.onCoordinates}/>
                    </Typography>
                    <div className={classes.flex}>
                        <Grid container spacing={2} direction={'row'}>
                            <Grid item>
                                <CurrentWeatherIcon data={result} classes={classes}/>
                            </Grid>
                            <Grid item>
                                <WeatherDetails data= {result} classes={classes}/>
                            </Grid>
                        </Grid>
                    </div>
                    <MyFooter />
                </Container>
            </main>
        </div>
    );
}

/*

 {// TemperatureChart }
<Grid item xs={12} md={8} lg={9}>
    <Paper className={fixedHeightPaper}>
        <TemperatureChart/>
    </Paper>
</Grid>
{// Actual Temperature}
<Grid item xs={12} md={4} lg={3}>
    <Paper className={fixedHeightPaper}>
        <ActualTemperature />
    </Paper>
</Grid>
{// TemperatureChart }
<Grid item xs={12} md={8} lg={9}>
    <Paper className={fixedHeightPaper}>
        <WindChart/>
    </Paper>
</Grid>
{// Actual Wind }
<Grid item xs={12} md={4} lg={3}>
    <Paper className={fixedHeightPaper}>
        <ActualWind />
    </Paper>
</Grid>

 */