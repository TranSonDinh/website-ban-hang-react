import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import MenuTop from './components/MenuTop.js';
import Products from './pages/Products.js';

import {CreateItem} from './context/createItem';

class App extends Component {
  render(){
    return (
      <CreateItem>
        <Router>
        <div className='App'>
          <MenuTop />

            <Route path="/products" component={Products}></Route>
            <Route path="/" ></Route>
        </div>
      </Router>
      </CreateItem>
      

    );
  }
}

export default App;
