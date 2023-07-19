import QuantityForm from "../Form/QuantityForm";
import "./Item.css";

const Item = (props) => {
  return (
    <div className="items">
      <div className="item">
        <h3 className="item_title">{props.title}</h3>
        <p className="item_description">{props.desc}</p>
        <h3 className="item_price">${props.price}</h3>
      </div>
      
      <div className="add_quantity_form">
        <QuantityForm/>
      </div>

    </div>
  );
};

export default Item;
