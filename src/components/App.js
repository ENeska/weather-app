import React, {Component} from 'react';
import '../scss/init_home.scss';
import {BrowserRouter, Route} from 'react-router-dom'
import TodayWeather from "./TodayWeather";
import SearchWeather from "./SearchWeather";
import LongTerm from "./LongTerm";

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route path="/today" component={TodayWeather}/>
                    <Route path="/long-term" component={LongTerm}/>
                    <Route path="/" exact component={SearchWeather}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
