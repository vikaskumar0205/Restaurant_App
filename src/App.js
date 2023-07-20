import "./App.css";
import Header from "./Components/Header/Header";
import ItemList from "./Components/Items/ItemList";
import Summary from "./Components/Summary/Summary";
import { v4 as uuidv4 } from "uuid";
import Modal from "./Components/Items/Modal";

const App = () => {
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

  return (
    <div className="app">
      <div className="app_modal">
        <Modal items={items} />
      </div>
      <div className="app_hidden">
        <Header />
        <div className="app_summary">
          <Summary />
        </div>
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default App;
