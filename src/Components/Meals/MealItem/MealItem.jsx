import React, {useContext} from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/CartContex";


const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  const cartCtx = useContext(CartContext);
  const mealsItemDataHandler=(cartItemCount)=> {
    cartCtx.addItem({
      id:props.id,
      amount:cartItemCount,
      price:props.price,
      name:props.name,
      desc:props.desc
    })
  }

  return (
    <li>
      <div className={classes["meal-item"]}>
        <div className="meal-item-about">
          <div className={classes.name}>{props.name}</div>
          <div className={classes.desc}>{props.desc}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div className="meal-item-form">
          <MealItemForm onAddItemData={mealsItemDataHandler} />
        </div>
        
      </div>
      <hr />
    </li>
  );
};

export default MealItem;
