import React from 'react';

const ResultLong = (props) => {

    const {latitude, weather, city, error} = props.weather;

    let content = null;

    if (!error && (city || latitude)) {
        content = (
            <div className={"lonTerm"}>
                {weather.map(element =>
                    <div key={element.date}>
                        <h4 className={"result__text result__text--orange"}>{element.date}</h4>
                        <h2 className={"result__text result__text--big"}> {element.temp} &#176;C</h2>
                        <h4 className={"result__text result__text--small"}>Ciśnienie:<span> {element.pressure} </span> hPa</h4>
                        <h4 className={"result__text result__text--small"}>Wiatr: <span> {element.wind}</span> km/h</h4>
                    </div>
                )}
            </div>
        )
    }
    return (
        <div className="result__text">
            {error ? `Nie mam w bazie ${city}` : content}
        </div>
    )
};

export default ResultLong;