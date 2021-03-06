import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import ItemDetailConteiner from './components/ItemDetailConteiner'
import Cart from './components/Cart'
import { CartProvider } from './context/CartContext';
import Form from './components/Form';
import Footer from './components/Footer';


function App() {
  return (
    <CartProvider >
      <div className="App">
        <BrowserRouter>
          <Route path='/'>
            <NavBar />
          </Route>
          <Switch>

            <Route exact path='/'>
              <ItemListContainer />
            </Route>
            <Route exact path='/category/:categoryId'>
              <ItemListContainer />
            </Route>

            <Route exact path='/item/:id'>
              <ItemDetailConteiner />
            </Route>

            <Route path='/cart'>
              <Cart />
            </Route>
            <Route path='/form'>
              <Form />
            </Route>


          </Switch>
          <Route path='/'>
            <Footer/>
          </Route>
            
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
