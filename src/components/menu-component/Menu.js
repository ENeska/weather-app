import React from 'react';
import ItemMenu from './ItemMenu'

class Menu extends React.Component {

    state = {
        searchWeather: "Szukaj pogody",
        todayWeather: "Pogoda na dziś",
        longTermWeather: "Pogoda długoterminowa",
        adressSearch: "/",
        adressToday: "/today",
        adressLongTerm: "/long-term"
    };

    render() {
        return (
            <ul className={"menu"}>
                <ItemMenu name={this.state.searchWeather} path={this.state.adressSearch}/>
                <ItemMenu name={this.state.todayWeather} path={this.state.adressToday}/>
                <ItemMenu name={this.state.longTermWeather} path={this.state.adressLongTerm}/>
            </ul>
        )
    }
};

export default Menu