import React from 'react';

const Result = (props) => {

    const {latitude, date, city, temp, pressure, wind, error} = props.weather;

    let content = null;

    if (!error && (city || latitude)) {
        content = (
            <div>
                <h4 className={"result__text result__text--small"}> {date} </h4>
                <h2 className={"result__text result__text--big"}> {temp} &#176;C </h2>
                <h4 className={"result__text result__text--small"}> Ciśnienie: <span> {pressure} </span> hPa </h4>
                <h4 className={"result__text result__text--small"}> Prędkość wiatru: <span>{wind}  </span> km/h </h4>
            </div>
        )
    }
    return (
        <div className="result__text">
            {error ? `Brak danych o pogodzie dla wpisanej lokalizacji` : content}
        </div>
    )
};
export default Result;