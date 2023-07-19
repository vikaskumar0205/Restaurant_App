import './App.css';
import Header from './Components/Header/Header';
import ItemList from './Components/Items/ItemList';
import Summary from './Components/Summary/Summary';

const App = ()=> {

  const items = [
    {
      title:'Burger',
      desc:'A delicious burger',
      price:45,
    },

    {
      title:'Pizza',
      desc:'A indians spaciality pizza',
      price:95,
    }
  ]

  return (<div>
    <Header/>
    <Summary/>
    <ItemList items={items}/>
  </div>);
}

export default App;
