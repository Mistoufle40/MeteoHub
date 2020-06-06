import React from "react";

import {history} from '../_helpers';

import {HomePage} from '../HomePage';
import {Wrapper} from 'es6-react-admin-lte';

import 'moment/locale/fr';

const moment = require('moment-timezone');
moment.locale('fr');
moment.tz.setDefault("Europe/Paris");

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weather: {'temp': 5, 'pluie': 30}, // Valeurs mises en dur. La varicontiendra les valeurs de l'API
            loading: true
        };
        history.listen((location, action) => {
            console.log("Location change: ", location, action);
        });
    }

    componentDidMount() {
        //APPEL API
        /*
        API.get(http:API)
            .then(response =>{
                this.setState( {
                    weather: response.data,
                    loading: false
                })
            })
            .catch(error => {
                console.log('Error when fetching and parsing data', error)
            })*/
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