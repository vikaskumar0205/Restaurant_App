
import React from "react";

const CartContext = React.createContext({
  isHidden:null,
  updateData:()=>{},
  items:[],
  totalAmount:0,
  addItem:()=> {},
  increaseItem:()=>{},
  removeItem:()=> {},
  deleteItem:()=>{},
})

export default CartContext;