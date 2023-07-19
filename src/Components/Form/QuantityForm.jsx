
import './QuantityForm.css';

const QuantityForm = ()=>{
  return (
    <div className="add_quantity_form">
      <div className="quantity_form">
        <div className="quantity_form__amount">Amount</div>
        <div className="quantity_form__quantity">1</div>
      </div>
      <button type="submit">+Add</button>
    </div>
  );
};

export default QuantityForm;