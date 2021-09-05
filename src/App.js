import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailConteiner from './components/ItemDetailConteiner'

 

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <NavBar />
      {/* <Switch> */}

    {/* <Route path='/'> */}
      <ItemListContainer />
    {/* </Route> */}

        {/* <Route path='/detalle'> */}
       <ItemDetailConteiner />
       {/* </Route> */}
       
      {/* </Switch> */}
           </div>
    // </BrowserRouter>
  );
}

export default App;
