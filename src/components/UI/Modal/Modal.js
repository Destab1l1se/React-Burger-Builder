import React from "react";
import classes from './Modal.module.css';
import Backdrop from "../Backdrop/Backdrop";

const modal = ({show, closeModal, children}) => (

    <React.Fragment>
        <Backdrop show={show} clicked={closeModal}/>
        <div
            className={classes.Modal}
            style={{
                transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
            }}
        >
            {children}
        </div>
    </React.Fragment>
);

export default React.memo(modal, (oldProps, newProps) => {
    return oldProps.show === newProps.show && oldProps.children === newProps.children;
});