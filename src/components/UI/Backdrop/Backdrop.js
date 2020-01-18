import React from "react";

import classes from './Backdrop.module.css';

const backdrop = ({show, clicked}) => (
    show ? <div onClick={clicked} className={classes.Backdrop}/> : null
);

export default backdrop;