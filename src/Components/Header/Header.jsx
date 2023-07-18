import './Header.css';
import CartImage from '../images/cart.jpg';
const Header=()=> {
  return (
    <div className="header">
      <div className="header_title">
        <h2>ReactMeals</h2>
      </div>
      <div className="header_cart">
        <img src={CartImage} alt="not found images" />
        <span>Your Cart</span>
        <div>2</div> 
      </div>
    </div>
  );
};

export default Header;