import React from 'react';
import {connect} from 'react-redux';
import Chart from "../components/Chart";
import GoogleMap from "../components/GoogleMap";


class WeatherList extends React.Component {

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }

    renderWeather(cityData) {
        const info = cityData.city;
        const {lon, lat} = info.coord;
        const temps = cityData.list.map(weather => weather.main.temp);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const pressure = cityData.list.map(weather => weather.main.pressure);

        return (
            <tr key={info.id}>
                <td>
                    <GoogleMap lat={lat} lon={lon}/>
                </td>
                <td>
                    <Chart data={temps} color="red" units="K"/>
                </td>
                <td>
                    <Chart data={pressure} color="green" units="hPa"/>
                </td>
                <td>
                    <Chart data={humidity} color="blue" units="%"/>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather
    }
};

export default connect(mapStateToProps)(WeatherList);