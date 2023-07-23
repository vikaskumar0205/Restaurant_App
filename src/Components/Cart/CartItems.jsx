import React, { useContext } from "react";
import classes from "./CartItems.module.css";
import CartContext from "../../Store/CartContex";

const CartItems = (props) => {
  let cartCtx = useContext(CartContext);

  const increaseItemHanler=(e)=> {
    // console.log(e.target.parentElement.parentElement);
    props.onIncreaseItem(e.target.parentElement.parentElement.id);
  }

  const removeItemHandler=(e)=> {
    // console.log(e.target.parentElement);
    props.onRemoveItem(e.target.parentElement.parentElement.id);
  }

  const deleteItemHandler=(e)=> {
    props.onDeleteItem(e.target.parentElement.parentElement.id);
  }

  if(cartCtx.items.length===0) {
    return <h3 className={classes.empty}>No items found, Please add items</h3>
  }

  return (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((cartItem) => (
        <li key={cartItem.id} id={cartItem.id} className={classes["cart-item"]}>
          <div>{cartItem.name}</div>
          <div className={classes.amount}>${cartItem.price}</div>
          <div className={classes["changed-button"]}>
            <button
              type="button"
              className={classes.decrese}
              style={{ fontSize: "20px" }}
              onClick={removeItemHandler}
            >
              -
            </button>
            <h4>x{cartItem.amount}</h4>
            <button
              type="button"
              className={classes.increase}
              style={{ fontSize: "20px" }}
              onClick={increaseItemHanler}
            >
              +
            </button>
          </div>
          <div className={classes["delete-button"]}>
            <button type="button" className={classes.delete} onClick={deleteItemHandler}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartItems;
