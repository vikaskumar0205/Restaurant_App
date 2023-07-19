import "./Item.css";

const Item = (props) => {
  return (
    <div className="item">
        <h3 className="item_title">{props.title}</h3>
        <p className="item_description">{props.desc}</p>
        <h3 className="item_price">${props.price}</h3>
    </div>
  );
};

export default Item;
