import React from "react";

import classes from './Button.module.css';

const button = ({clicked, btnType, ...otherProps}) => (
    <button
        onClick={clicked}
        className={[classes.Button, classes[btnType]].join(' ')}
    >
        {otherProps.children}
    </button>
);

export default button;