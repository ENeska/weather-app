import React from 'react';
import Menu from './Menu'

const Header = () => {
    return (
        <header className={"header"}>
            <p>Pogoda <span>App</span></p>
            <Menu/>
        </header>
    )
};

export default Header