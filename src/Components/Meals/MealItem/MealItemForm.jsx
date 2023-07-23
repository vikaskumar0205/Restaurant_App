import { useRef } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";


const MealItemForm = (props) => {
  const amountInputRef = useRef();
  
  const formSubmitHandler=(e)=> {
    e.preventDefault();
    const enteredAmountNum = +(amountInputRef.current.value);
    props.onAddItemData(enteredAmountNum);
  }

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit" >
        +Add
      </button>
    </form>
  );
};

export default MealItemForm;
