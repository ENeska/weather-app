import React from 'react';

const ResultSmog = (props) => {

    const {errorSmog, quality, no2, pm10, so2} = props.smog;
    let content = null;

    content = (
        <div>
            <h3 className={"result__text result__text--orange"}>Raport smogowy</h3>
            <h4 className={"result__text result__text--small"}>Jakość powietrza: <span> {quality} </span></h4>
            <h4 className={"result__text result__text--small"}>NO2: <span>{no2} </span> µg/m3</h4>
            <h4 className={"result__text result__text--small"}>PM10: <span>{pm10}</span> µg/m3</h4>
            <h4 className={"result__text result__text--small"}>SO2:<span> {so2}</span> µg/m3</h4>
        </div>
    );

    return (
        <div>
            {errorSmog ? `Brak danych o jakości powietrza` : content}
        </div>
    )
};
export default ResultSmog;