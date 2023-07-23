import { useState, useReducer } from "react";
import CartContext from "./CartContex";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
// we can write the code for the reducer function!
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    let updatedItems = null;
    const itemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    if (itemIndex !== -1) {
      state.items[itemIndex].amount += action.item.amount;
      updatedItems = state.items;
    } else updatedItems = [...state.items, action.item];

    return {
      items: updatedItems,
      totalAmount: state.totalAmount + action.item.price * action.item.amount,
    };
  } else if (action.type === "INC_ITEM") {
    const itemIndex = state.items.findIndex((item) => item.id === action.id);
    state.items[itemIndex].amount += 1;
    return {
      items: state.items,
      totalAmount: state.totalAmount + state.items[itemIndex].price,
    };
  } else if (action.type === "REMOVE_ITEM") {
    let updatedItems = null;
    const itemIndex = state.items.findIndex((item) => item.id === action.id);
    if (state.items[itemIndex].amount > 1) {
      state.items[itemIndex].amount -= 1;
      updatedItems = state.items;
    } else {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }
    let updatedTotalAmount =
      state.totalAmount.toFixed(2) - state.items[itemIndex].price.toFixed(2);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "DELETE_ITEM") {
    const itemIndex = state.items.findIndex((item) => item.id === action.id);

    const updatedTotalAmount =
      state.totalAmount.toFixed(2) -
      (state.items[itemIndex].price * state.items[itemIndex].amount).toFixed(2);
    return {
      items: state.items.filter((item) => item.id !== action.id),
      totalAmount: updatedTotalAmount,
    };
  } else {
    return defaultCartState;
  }
};

const CartProvider = (props) => {
  const [isHidden, setIsHidden] = useState(null);

  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const updateData = (isTrue) => {
    setIsHidden(isTrue);
  };

  const addItem = (item) => {
    dispatchCart({ type: "ADD_ITEM", item: item });
  };

  const removeItem = (id) => {
    dispatchCart({ type: "REMOVE_ITEM", id: id });
  };

  const increaseItem = (id) => {
    dispatchCart({ type: "INC_ITEM", id: id });
  };
  const deleteItem = (id) => {
    dispatchCart({ type: "DELETE_ITEM", id: id });
  };

  return (
    <CartContext.Provider
      value={{
        isHidden: isHidden,
        updateData: updateData,
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItem,
        increaseItem: increaseItem,
        removeItem: removeItem,
        deleteItem: deleteItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
