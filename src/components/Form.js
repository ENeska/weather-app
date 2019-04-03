import React from 'react';

const Form = (props) => {
    return (
        <form className={"form"} onSubmit={props.submit}>
            <input className={"form__input"}
                type="text"
                value={props.value}
                onChange={props.change}
                placeholder="Wpisz miasto"/>
            <button className={"form__button"}>Wyszukaj miasto</button>
        </form>
    );
};

export default Form