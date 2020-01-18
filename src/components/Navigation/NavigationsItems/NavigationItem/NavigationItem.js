import React from "react";

import classes from './NavigationItem.module.css';

const navigationItem = ({link, active, ...otherProps}) => (
    <li className={classes.NavigationItem}>
        <a
            href={link}
            className={active ? classes.active : null}>
            {otherProps.children}
        </a>
    </li>
);

export default navigationItem;