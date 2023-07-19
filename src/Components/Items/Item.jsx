import "./Item.css";

const Item = (props) => {
  return (
    <div className="item">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        <h3>${props.price}</h3>
    </div>
  );
};

export default Item;
