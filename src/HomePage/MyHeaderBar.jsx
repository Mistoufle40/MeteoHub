import React from 'react';

import Clock from "../components/Clock";

import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import RefreshIcon from "@material-ui/icons/Refresh";
import AppBar from "@material-ui/core/AppBar";
import {useStyles} from '../components/useStyles'

function MyHeaderBar() {

    const classes = useStyles();

    return (

        <AppBar position="absolute" className={clsx(classes.appBar && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
                <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                    WeatherCap
                </Typography>
                <Typography align="right" color="inherit" className={classes.title}>
                    <Clock/>
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={0} color="secondary">
                        <RefreshIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export {MyHeaderBar}