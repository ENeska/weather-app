import React from 'react';
import Header from "./menu-component/Header";
import ResultLong from "./result-componenet/ResultLong";

const apiKey = `16dbdeb988b2a2c38fd73fda53260bda`;
export class LongTerm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: "",
            longitude: "",
            city:"",
            weather: []
        };
    }

    getWeather = () => {

        const API = `http://api.openweathermap.org/data/2.5/forecast?lat=${this.state.latitude}&lon=${this.state.longitude}&units=metric&appid=${apiKey}`;
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
                    city: data.city.name,
                    weather: [
                        {
                            date: data.list[0].dt_txt,
                            temp: data.list[0].main.temp,
                            pressure: data.list[0].main.pressure,
                            wind: data.list[0].wind.speed
                        },
                        {
                            date: data.list[8].dt_txt,
                            temp: data.list[8].main.temp,
                            pressure: data.list[8].main.pressure,
                            wind: data.list[8].wind.speed
                        },
                        {
                            date: data.list[16].dt_txt,
                            temp: data.list[16].main.temp,
                            pressure: data.list[16].main.pressure,
                            wind: data.list[16].wind.speed
                        },
                        {
                            date: data.list[24].dt_txt,
                            temp: data.list[24].main.temp,
                            pressure: data.list[24].main.pressure,
                            wind: data.list[24].wind.speed
                        }
                    ],
                    error: false,
                })
            })
            .catch(error => {
                this.setState( {
                    error: true,
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

    render(){
        return (
            <div className="App">
                <Header/>
                <h1 className={"result__text result__text--mid"}>{this.state.city}</h1>
                <ResultLong weather={this.state}/>
            </div>
        );
    }
}

export default LongTerm