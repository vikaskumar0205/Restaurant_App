import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import cartImage from "../../assets/cart.jpg";
import CartContext from "../../Store/CartContex";
const HeaderCartButton = () => {
  const [isBumped, setIsBumped] = useState(false);

  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;
  const numberOfCartItems = items.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  const headerCartButtonHandler = () => {
    cartCtx.updateData(true);
  };

  const classBtn = `${classes.button} ${isBumped?classes.bump:''}`;

  useEffect(()=>{
    if(items.length===0) return;
    setIsBumped(true);

    const timeOutId = setTimeout(()=>{
      setIsBumped(false);
    },300);
    // cleared id 
    return ()=> {
      clearTimeout(timeOutId);
    }

  }, [items]);

  return (
    <button
      type="button"
      className={classBtn}
      onClick={headerCartButtonHandler}
    >
      <span className={classes.icon}>
        <img src={cartImage} alt="Images not found" />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
