import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import CartContext from "../../Store/CartContex";

const BackDrop = (props) => {
  let backdrop = props.isHidden ? "backdrop" : "";
  return <div className={classes[backdrop]}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes["modal-overlay"]}>
      <div className={classes.overlay}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop isHidden={cartCtx.isHidden} />,
        document.getElementById("overlay")
      )}
      {cartCtx.isHidden &&
        ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          document.getElementById("overlay")
        )}
    </Fragment>
  );
};

export default Modal;
