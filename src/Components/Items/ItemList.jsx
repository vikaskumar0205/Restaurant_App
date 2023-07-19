import Item from "./Item";
import "./ItemList.css";

const ItemList = (props) => {
  return (
    <ul className="items_list">
      {props.items.map((item, index) => (
        <li>
          <Item title={item.title} desc={item.desc} price={item.price} />
          {index!==(props.items.length-1) && <hr style={{ backgroundColor: "red" }} />}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
