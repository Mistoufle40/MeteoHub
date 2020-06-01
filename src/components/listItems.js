import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import WavesIcon from '@material-ui/icons/Waves';
import ToysIcon from '@material-ui/icons/Toys';
import InvertColorsIcon from '@material-ui/icons/InvertColors';
import EqualizerIcon from '@material-ui/icons/Equalizer';

export const mainListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <WhatshotIcon />
            </ListItemIcon>
            <ListItemText primary="Temperature" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ToysIcon />
            </ListItemIcon>
            <ListItemText primary="Wind" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <InvertColorsIcon />
            </ListItemIcon>
            <ListItemText primary="Rain gauge" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <WavesIcon />
            </ListItemIcon>
            <ListItemText primary="Humidity" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <EqualizerIcon />
            </ListItemIcon>
            <ListItemText primary="Last day" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <EqualizerIcon />
            </ListItemIcon>
            <ListItemText primary="Last Week" />
        </ListItem>
    </div>
);