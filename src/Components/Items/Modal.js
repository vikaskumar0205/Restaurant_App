import React from "react";
import ReactDOM from "react-dom";
import OrderItem from "./OrderItem";

const Modal = (props) => {
  // console.log(props.item+'2');
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <OrderItem>{props.children}</OrderItem>,
        document.getElementById("order_item")
      )}
    </React.Fragment>
  );
};

export default Modal;
