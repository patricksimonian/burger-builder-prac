import React from 'react';
import classes from './BuildControl.css';

const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button onClick={props.removed} disabled={props.disabled} className={classes.Less}>less</button>
    <button onClick={props.added} className={classes.More}>more</button>
  </div>
);

export default buildControl;