import React, { useContext } from "react";
import classes from "./CartItems.module.css";
import CartContext from "../../Store/CartContex";

const CartItems = (props) => {
  let cartCtx = useContext(CartContext);

  const increaseItemHanler = (id) => {
    props.onIncreaseItem(id);
  };

  const removeItemHandler = (id) => {
    props.onRemoveItem(id);
  };

  const deleteItemHandler = (id) => {
    props.onDeleteItem(id);
  };

  if (cartCtx.items.length === 0) {
    return <h3 className={classes.empty}>No items found, Please add items</h3>;
  }

  return (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((cartItem) => (
        <li key={cartItem.id} id={cartItem.id} className={classes["cart-item"]}>
          <div className={classes.name}>{cartItem.name}</div>
          <div className={classes.about}>
            <div className={classes.amount}>${cartItem.price}</div>
            <div className={classes["changed-button"]}>
              <button
                type="button"
                className={classes.decrese}
                style={{ fontSize: "20px" }}
                onClick={removeItemHandler.bind(null, cartItem.id)}
              >
                -
              </button>
              <h4>x{cartItem.amount}</h4>
              <button
                type="button"
                className={classes.increase}
                style={{ fontSize: "20px" }}
                onClick={increaseItemHanler.bind(null, cartItem.id)}
              >
                +
              </button>
            </div>

            <div className={classes["delete-button"]}>
              <button
                type="button"
                className={classes.delete}
                onClick={deleteItemHandler.bind(null, cartItem.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartItems;
