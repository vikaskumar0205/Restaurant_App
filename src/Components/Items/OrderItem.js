import "./OrderItem.css";
import { v4 as uuidv4 } from "uuid";

const OrderItem = ({ items }) => {
  const item = {
    id: uuidv4(),
    title: "Pizza",
    desc: "A indians spaciality pizza",
    price: 95,
  };
  return (
    <div className="order_item" item={item}>
      <p>{item.title}</p>
      <div className="order_amount">
        <h3>Total Amount</h3>
        <span>${item.price}</span>
      </div>
      <div className="order_buttons">
        <button type="button" className="close_button">
          Close
        </button>
        <button type="button" className="order_button">
          Order
        </button>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default OrderItem;
