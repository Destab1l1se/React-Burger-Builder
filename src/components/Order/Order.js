import React from "react";
import classes from './Order.module.css';

const order = ({ingredients: unprocessedIngredients, price}) => {
    const ingredients = [];

    for (let ingredientName in unprocessedIngredients) {
        ingredients.push({
            name: ingredientName,
            amount: unprocessedIngredients[ingredientName]
        });
    }

    const ingredientsOutput = ingredients.map(ing => {
        return (
            <span
                key={ing.name}
                style={{
                    textTransform: 'capitalize',
                    display: 'inline-block',
                    margin: '0 8px',
                    border: '1px solid gray',
                    padding: '5px'
                }}
            >
                {ing.name} ({ing.amount})
            </span>
        );
    });

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientsOutput}</p>
            <p>Price: <strong>USD {(+price).toFixed(2)}</strong></p>
        </div>
    );
};

export default order;