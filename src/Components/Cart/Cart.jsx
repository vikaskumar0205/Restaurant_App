import React, { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItems from "./CartItems";
import CartContext from "../../Store/CartContex";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const totalPrice = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartCloseButtonHandler = () => {
    cartCtx.updateData(false);
  };

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const increaseItemHandler = (id) => {
    cartCtx.increaseItem(id);
  };

  const deleteButtonHandler = (id) => {
    cartCtx.deleteItem(id);
  };

  return (
    <Modal>
      <div className={classes["cart-items"]}>
        <CartItems
          onRemoveItem={removeItemHandler}
          onIncreaseItem={increaseItemHandler}
          onDeleteItem={deleteButtonHandler}
        />
      </div>
      <div className={classes.total}>
        <span>Total Price</span>
        <span>{totalPrice}</span>
      </div>
      <div className={classes.actions}>
        <button
          type="button"
          className={classes["close-btn"]}
          onClick={cartCloseButtonHandler}
        >
          Close
        </button>
        {cartCtx.items.length!==0 && <button type="button" className={classes["order-btn"]}>
          Order
        </button>}
      </div>
    </Modal>
  );
};

export default Cart;
