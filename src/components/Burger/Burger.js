import React from "react";

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ({ingredients}) => {

    const transformedIngredients = Object.keys(ingredients)
        .map(ingKey => [...Array(ingredients[ingKey])]
            .map((_, i) =>
                <BurgerIngredient key={ingKey + i} type={ingKey}/>
            )
        );

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type={'bread-top'}/>
            {transformedIngredients}
            <BurgerIngredient type={'bread-bottom'}/>
        </div>
    );
};

export default burger;