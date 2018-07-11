import React, {Component} from 'react';
//components
import Aux from '../../hoc/auxillary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 1.25,
  meat: 0,
  bacon: 0.33
}

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 0,
      salad: 0,
      bacon: 0,
      cheese: 0
    },
    totalPrice: 4,
    isPurchaseable: false,
    purchaseMode: false
  };

  setIsPurchaseableState = (ingredients) => {
    let ingredientsSum = Object.keys(ingredients)
      .reduce((acc, igKey) => {return acc + ingredients[igKey]}, 0);

    this.setState({isPurchaseable: ingredientsSum > 0});
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {...this.state.ingredients};
    updatedIngredients[type] = updatedCount;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
    this.setIsPurchaseableState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount > 0) {
      const updatedCount = oldCount - 1;
      const updatedIngredients = {...this.state.ingredients};
      updatedIngredients[type] = updatedCount;
      const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
      this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
      this.setIsPurchaseableState(updatedIngredients);
    }
  }

  orderNowHandler = () => {
    this.setState({purchaseMode: true});
  }
  purchaseModeOffHandler = () => {
    this.setState({purchaseMode: false});
  }
  purchaseContinuedHandler = () => {
    return;
  }
  render () {
    const disabledInfo = {...this.state.ingredients};

    for(let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] < 1;
    }

    return (
      <Aux>
        <Modal show={this.state.purchaseMode} modalClosed={this.purchaseModeOffHandler}>
          <OrderSummary
            total={this.state.totalPrice}
            modalClosed={this.purchaseModeOffHandler}
            continuePurchase={this.purchaseContinuedHandler}
            ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabledInfo={disabledInfo}
          total={this.state.totalPrice}
          purchaseable={this.state.isPurchaseable}
          purchaseModal={this.orderNowHandler}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;
