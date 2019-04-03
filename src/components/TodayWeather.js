import React from 'react';
import Header from "./menu-component/Header";
import Result from './result-componenet/Result';
import ResultSmog from './result-componenet/ResultSmog';

const apiWeatherKey = `16dbdeb988b2a2c38fd73fda53260bda`;
const apiSmogKey = `c478442b450ec2096bd8133f209963c1c3b26b5d`;

export class TodayWeather extends React.Component {

    state = {
        latitude: "",
        longitude: "",
        date: "",
        city: "",
        temp: "",
        pressure: "",
        wind: "",
        status: "",
        quality: "",
        no2: "",
        pm10: "",
        so2: "",
        error: false,
        errorSmog: false,
    };

    getWeather = () => {

        const API = `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&units=metric&appid=${apiWeatherKey}`;
        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response
                }
                throw Error("Nie udało się pobrać danych")
            })
            .then(response => response.json())
            .then(data => {
                const time = new Date().toLocaleString();
                this.setState({
                    date: time,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    wind: data.wind.speed,
                    error: false,
                })
            })
            .catch(error => {
                this.setState({
                    error: true,
                })
            })
    };

    getSmog = () => {

        const API = `https://api.waqi.info/feed/here/?token=${apiSmogKey}`;
        fetch(API)
            .then(response => {
                if (response.ok) {
                    return response
                }
                throw Error("Nie udało się pobrać danych")
            })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    status: data.status,
                    quality: data.data.aqi,
                    no2: data.data.iaqi.no2.v,
                    pm10: data.data.iaqi.pm10.v,
                    so2: data.data.iaqi.so2.v,
                })
            })
            .catch(error => {
                this.setState({
                    errorSmog: true,
                })
            })
    };

    getMyLocation = () => {
        const location = navigator.geolocation;
        if (location) {
            location.getCurrentPosition((position) => {
                this.setState({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    },
                    this.getWeather,
                    this.getSmog()
                )
            }, () => {
                this.setState({
                    latitude: 'err',
                    longitude: 'err'
                })
            })
        }
    };

    componentDidMount() {
        this.getMyLocation();
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <h1 className={"result__text result__text--mid"}>{this.state.city}</h1>
                <Result weather={this.state}/>
                <ResultSmog smog={this.state}/>
            </div>
        );
    }
}

export default TodayWeather