import React from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/auxillary';
import Backdrop from '../Backdrop/Backdrop';
const modal = (props) => (
  <Aux>
    <div className={classes.Modal} style={{
      transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
      opacity: props.show ? '1': '0'
    }}>
      {props.children}
    </div>
    <Backdrop show={props.show} closeModal={props.modalClosed}/>
  </Aux>
);

export default modal;