import React from "react";
import {NavLink} from 'react-router-dom';

import classes from './NavigationItem.module.css';

const navigationItem = ({link, exact, ...otherProps}) => (
    <li className={classes.NavigationItem}>
        <NavLink
            to={link}
            exact
            activeClassName={classes.active}
        >{otherProps.children}</NavLink>
    </li>
);

export default navigationItem;