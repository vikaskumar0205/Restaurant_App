
import React, {useState} from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import ItemList from "./Components/Items/ItemList";
import Summary from "./Components/Summary/Summary";
import { v4 as uuidv4 } from "uuid";
import Modal from "./Components/Items/Modal";

const App = () => {
   const [isCartClick, setIsCartClick] = useState(false);

  const items = [
    {
      id: uuidv4(),
      title: "Burger",
      desc: "A delicious burger",
      price: 45.87,
    },

    {
      id: uuidv4(),
      title: "Pizza",
      desc: "A indians spaciality pizza",
      price: 95,
    },

    {
      id: uuidv4(),
      title: "French Fries",
      desc: "We used frechy masale",
      price: 89.99,
    },

    {
      id: uuidv4(),
      title: "French Fries",
      desc: "We used frechy masale",
      price: 89.99,
    },
  ];

  const cartClickHandler=()=> {
    setIsCartClick(true);
  }
  const cartCloseButtonHandler=()=> {
    setIsCartClick(false);
  }
  
  let appClass = `app ${isCartClick?'hidden':''}`;

  return (
    <div className="app">
      {isCartClick && <div className="app_modal">
        <Modal items={items} onCloseCart={cartCloseButtonHandler}/>
      </div>}
      <div className={appClass}>
        <Header onClickCart={cartClickHandler}/>
        <div className="app_summary">
          <Summary />
        </div>
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default App;
