import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const buildControls = (props) => {
  const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
  ];

  const buildControlComponents = controls.map((control, ind) => (<BuildControl
    label={control.label}
    key={control.label + ind}
    disabled={props.disabledInfo[control.type]}
    added={() => props.ingredientAdded(control.type)}
    removed={() => props.ingredientRemoved(control.type)} />))

  return (
    <div className={classes.BuildControls}>
      <p>Current Price: <strong>{props.total.toFixed(2)}</strong></p>
      {buildControlComponents}
      <button disabled={!props.purchaseable} className={classes.OrderButton} onClick={props.purchaseModal}>ORDER NOW</button>
    </div>
  );
}

export default buildControls;