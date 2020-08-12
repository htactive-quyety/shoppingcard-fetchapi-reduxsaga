import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import ProductList from './containers/productList'
import Header from './components/header'
import Footer from './components/footer'
import ProductDetail from './components/productDetail'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Header />
        </div>
        <div>
          <Switch>
            <Route exact path='/' component={ProductList} />
            <Route path='/product-detail' component={ProductDetail}></Route>
          </Switch>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
