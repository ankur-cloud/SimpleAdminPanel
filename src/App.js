import React from 'react'

import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';
import Topbar from './components/Header/Topbar';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './Pages/Home';
import Chart from './components/chart/Chart';
import { Divider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './Pages/UserList/UserList';
import User from './Pages/user/User';
import NewUser from './Pages/newUser/NewUser';
import ProductList from './Pages/productList/ProductList';
import Product from './Pages/product/Product';
import NewProduct from './Pages/NewProduct/NewProduct';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <div className="container">
          <Sidebar />

          <Switch>
            <Route exact path='/'>
              <Home />

            </Route>

            <Route exact path='/users'>
              <UserList />

            </Route>
            <Route path='/user/:userId'>
              <User />
            </Route>

            <Route path='/newUser'>
              <NewUser />
            </Route>

            <Route exact path='/products'>
              <ProductList />

            </Route>
            <Route path='/product/:prodId'>
              <Product />
            </Route>

            <Route path='/newproduct'>
              <NewProduct />
            </Route>
          </Switch>
          {/* <div className='others'>
          </div> */}

        </div>



      </div>
    </Router>);
}

export default App;
