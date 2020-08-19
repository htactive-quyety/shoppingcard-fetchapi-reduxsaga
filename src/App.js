import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import ProductList from './containers/productList'
import Header from './components/header'
import Footer from './components/footer'
import ProductDetail from './components/productDetail'
import SignIn from './components/signIn'
import SignUp from './components/signUp'
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
            <Route path='/product-detail/:id' exact component={ProductDetail}></Route>
            <Route path='/singin-account' component={SignIn}></Route>
            <Route path='/singup-account' component={SignUp}></Route>
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
