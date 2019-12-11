import React from "react";

import classes from './BuildControl.module.css';

const buildControl = props => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button
            className={[classes.BuildControlButton, classes.Less].join(' ')}
            onClick={props.removed}
            disabled={props.disabled}
        >Less
        </button>
        <button
            className={[classes.BuildControlButton, classes.More].join(' ')}
            onClick={props.added}
        >More
        </button>
    </div>
);

export default buildControl;