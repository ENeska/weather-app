import React from 'react';
import {Link} from 'react-router-dom'

const ItemMenu = (props) => {

    return (
        <li className={"menu__item"}><Link to={props.path}>{props.name}</Link></li>
    )
};

export default ItemMenu