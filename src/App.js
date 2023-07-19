import './App.css';
import Header from './Components/Header/Header';
import ItemList from './Components/Items/ItemList';
import Summary from './Components/Summary/Summary';
import {v4 as uuidv4} from 'uuid';

const App = ()=> {

  const items = [
    {
      id:uuidv4(),
      title:'Burger',
      desc:'A delicious burger',
      price:45,
    },

    {
      id:uuidv4(),
      title:'Pizza',
      desc:'A indians spaciality pizza',
      price:95,
    },

    {
      id:uuidv4(),
      title:'French Fries',
      desc:'We used frechy masale',
      price:89.99,
    },
    
    {
      id:uuidv4(),
      title:'French Fries',
      desc:'We used frechy masale',
      price:89.99,
    }

  ]

  return (<div>
    <Header/>
    <Summary/>
    <ItemList items={items}/>
  </div>);
}

export default App;
