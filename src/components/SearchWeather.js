import React from 'react';
import Form from './Form'
import Result from './result-componenet/Result'
import Header from "./menu-component/Header";

const apiKey = `16dbdeb988b2a2c38fd73fda53260bda`;

class SearchWeather extends React.Component {

    state = {
        value: "",
        date: "",
        city: "",
        temp: "",
        pressure: "",
        wind: "",
        error: false,
    };

    handleInputChange = (event) => {
        this.setState({
            value: event.target.value
        })
    };

    handleCitySubmit = (event) => {
        event.preventDefault();
        const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&units=metric&appid=${apiKey}`;
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
                this.setState(prevState => ({
                    date: time,
                    city: prevState.value,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    wind: data.wind.speed,
                    error: false,
                }))
            })
            .catch(error => {
                this.setState(prevState => ({
                    error: true,
                    city: ""
                }))
            })
    };

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <Form
                    value={this.state.value}
                    change={this.handleInputChange}
                    submit={this.handleCitySubmit}
                />
                <h1 className="result__text result__text--mid"> {this.state.city}</h1>
                <Result weather={this.state}/>
            </div>
        );
    }
}

export default SearchWeather;