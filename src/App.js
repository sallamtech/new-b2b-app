import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import HomePage from './pages/HomePage';
import NavBar from './pages/NavBar';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/Profile';
import Single from './pages/Single';
import UserLogin from './pages/Login';
import FooterSection from './pages/Footer';
import UserRegister from './pages/Signup';
import Account from './pages/Account';
import Businesses from './pages/Businesses';
import OrderDetail from './pages/OrderDetail';
import ViewOrder from './pages/ViewOrder';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import OrderReceived from './pages/OrderReceived';
import Post from './pages/Post';
import Register from './pages/Register';
import SignIn from './pages/SignIn';
import EditProfile from './pages/EditProfile';
import SearchResults from './pages/SearchResults';
import HomeSearchResualt from './pages/home/HomeSearchResualt';

import Following from './components/business/Following';
import ProductBox from './components/product/ProductBox';
import CategoryBox from './components/product-category/CategoryBox';
import OrderBox from './components/order/OrderBox';


import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div style={{height: "100%"}}>
        <NavBar/>
          <section id="appContainer" className="App">
              <br/>
              <Route exact path="/" component={HomePage}/>
              <Route path="/signin" component={UserLogin}/>
              <Route path="/signup" component={UserRegister}/>
              <Route path="/profile" component={Profile}/>
              <Route path="/single" component={Single}/>
              <Route path="/account" component={Account}/>
              <Route path="/businesses" component={Businesses}/>
              <Route path="/order-detail" component={OrderDetail}/>
              <Route path="/view-order" component={ViewOrder}/>
              <Route path="/cart" component={Cart}/>
              <Route path="/checkout" component={Checkout}/>
              <Route path="/order-received" component={OrderReceived}/>
              <Route path="/post" component={Post}/>
              <Route path="/register" component={Register}/>
              <Route path="/sign-in" component={SignIn}/>
              <Route path="/edit-profile" component={EditProfile}/>
              <Route path="/search-results" component={SearchResults}/>
              <Route path="/home-search-results" component={HomeSearchResualt}/>
              
          </section>
          
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/dashboard/categories" component={CategoryBox}/>
          <Route path="/dashboard/products" component={ProductBox}/>
          <Route path="/dashboard/orders" component={OrderBox}/>
          <Route path="/dashboard/followers" component={Following}/>
          
          <FooterSection/>
        </div>
    </Router>
    );
  }
}

export default App;
