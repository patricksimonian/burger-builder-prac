import React from 'react';

import classes from './OrderSummary.css';
import Aux from '../../../hoc/auxillary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map((igKey, ind) => {
    return (
      <li key={igKey + ind}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span> x {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order Summary</h3>
      <p>A delicious burger yo</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Total Price: <strong>{props.total.toFixed(2)}</strong></p>
      <p>Continue to Checkout</p>
      <Button buttonType="Danger" clicked={props.modalClosed}>CANCEL</Button>
      <Button buttonType="Success">CONTINUE</Button>
    </Aux>
  );
}
export default orderSummary;