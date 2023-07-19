import Item from "./Item";
import "./ItemList.css";

const ItemList = (props) => {



  return (
    <ul className="items_list">
      {props.items.map((item, index) => (
        <li key={item.id} id={item.id}>
          <Item title={item.title} desc={item.desc} price={item.price} />
          <hr />
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
