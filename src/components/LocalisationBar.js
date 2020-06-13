
import React from 'react';

async function getData(address)
{
    return fetch( 'http://www.mapquestapi.com/geocoding/v1/address?key=e6VE3IqgAP9QMnEOALfdGJqDBACvLPin&location=' + address)
        .then(res => res.json());
}

export default class LocalisationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
        getData(this.state.value).then(res => {
            this.props.onCoordinates({long: res.results[0].locations[0].latLng.lng, lat:res.results[0].locations[0].latLng.lat})
        });
        event.preventDefault();
    }

    render() {
        var left = 1500 + 'px';
        var top = 100 + 'px';
        return (

            <div style={{left, top, position:'absolute'}}>

            <form onSubmit={this.handleSubmit}>
                <label>
                    Address :
                    <input type="text" value={this.state.value} onChange={this.handleChange} />        </label>
                <input type="submit" value="Choose localisation" />
            </form>
    </div>
        );
    }
}