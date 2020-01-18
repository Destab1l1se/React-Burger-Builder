import React from "react";
import Button from "../../UI/Button/Button";

const OrderSummary = ({ingredients, price, purchaseCancelled, purchaseContinue}) => {

    const ingredientSummary = Object.keys(ingredients)
        .map(ingKey => (
            <li key={ingKey}>
                <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {ingredients[ingKey]}
            </li>
        ));

    return (
        <React.Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: </strong> {price.toFixed(2)}</p>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={purchaseContinue}>CONTINUE</Button>
        </React.Fragment>
    )
};

export default OrderSummary;