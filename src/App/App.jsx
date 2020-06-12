import React from "react";

import {history} from '../_helpers';

import {HomePage} from '../HomePage';
import {Wrapper} from 'es6-react-admin-lte';

import 'moment/locale/fr';

const moment = require('moment-timezone');
moment.locale('fr');
moment.tz.setDefault("Europe/Paris");

async function getData()
{
    var key = '8fa88c678c556225329c4e78b95dc66c';
    var lat = '43.61318588256836';
    var lon = '1.4219928979873657';

    return fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&appid=' + key)
        .then(res => res.json());


}
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {},
            loading: true
        };
        history.listen((location, action) => {
            console.log("Location change: ", location, action);
        });
    }

    componentDidMount() {
        getData().then(res => {
            this.setState( {
                weather: res,
            });
        });

    }

    render() {
        return (
            <Wrapper className="App">
                <HomePage data={this.state.weather}/>
            </Wrapper>
        );
    };
}

export {App};