import React from 'react';
import PropTypes from 'prop-types';

import classes from './Burger.css';
//components
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = (props) => {
  //convert ingredients obj into something itterable
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => <BurgerIngredient type={igKey} key={igKey + i} />)
    }).reduce((acc, ingredientsArray) => {
      return acc.concat(ingredientsArray);
    }, []);

  if(transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding Ingredients</p>;
  }
  return (
      <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>
      </div>
  );
};

export default Burger;