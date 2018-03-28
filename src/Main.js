/**
* This is the Main file
* This file contains the routes of all the pages
**/

// React native and others libraries imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BackHandler } from 'react-native';
import { Root } from 'native-base';
import { Scene, Router, Actions,Stack, Modal } from 'react-native-router-flux';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';


// Our custom files and classes import
import Home from './page/Home';
import Search from './page/Search';
import Cart from './page/Cart';
import WishList from './page/WishList';
import Map from './page/Map';
import Newsletter from './page/Newsletter';
import Contact from './page/Contact';
import Category from './page/Category';
import LecTwo from './page/LecTwo';
import Product from './page/Product';
import ImageGallery from './page/ImageGallery';
import Login from './page/Login';
import Signup from './page/Signup';
import Checkout from './page/Checkout';
import QuizOne from './redux/quizlec1/scenes/Home';
import QuizGameOne from './redux/quizlec1/scenes/Game';
import QuizResultOne from './redux/quizlec1/scenes/Result';

export default class Main extends Component {

  componentWillMount = () => {
    setRootViewBackgroundColor('#000');
    BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
  };


  render() {
    return(
      <Provider store={store}>
      <Root>
        <Router>
          <Scene key="root">
            <Scene initial key="home" component={Home} hideNavBar />
            <Scene key="search" component={Search} modal hideNavBar />
            <Scene key="cart" component={Cart} modal hideNavBar />
            <Scene key="wishlist" component={WishList} modal hideNavBar />
            <Scene key="map" component={Map} modal hideNavBar />
            <Scene key="contact" component={Contact} modal hideNavBar />
            <Scene key="newsletter" component={Newsletter} modal hideNavBar />
            <Scene key="category" component={Category} hideNavBar />
            <Scene key="lecTwo" component={LecTwo} hideNavBar />
            <Scene key="product" component={Product} hideNavBar />
            <Scene key="imageGallery" component={ImageGallery} modal hideNavBar />
            <Scene key="login" component={Login} hideNavBar />
            <Scene key="signup" component={Signup} hideNavBar />
            <Scene key="checkout" component={Checkout} hideNavBar />
            <Scene key="quiz1" component={QuizOne} modal hideNavBar />
            <Scene key="quizgame1" component={QuizGameOne} hideNavBar />
            <Scene key="quizresult1" component={QuizResultOne} hideNavBar />
          </Scene>
        </Router>
      </Root>
      </Provider>
    );
  }

}
