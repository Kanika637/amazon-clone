import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Checkout from '../src/components/checkout/Checkout';
import Login from './components/login/Login';
import { auth } from './firebase';
// import { useStateValue } from './store/StateProvider';
import Payment from './components/payment/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Thanku from './components/thanku/Thanku';
import Navbar from './components/navbar/Navbar';

import Footer from './components/footer/Footer';
import BookToys from './Categories/BooksToys/BookToys';
import AllCategories from './Categories/AllCategories';
import FashionBeauty from './Categories/FashionBeauty/FashionBeauty';
import Electronics from './Categories/Electronics/Electronics';
import { useStateValue } from './store/StateProvider';

const stripePromise = loadStripe(
  'pk_test_51JdCsbSDjgMnau9ncKpDOaddNIWtdhVTTV92V4ShkTzLec033vWcRQjqEUByb1s4D6vmPmH6oMK0bkBJyBlRsStp00wQV1pNuX'
);
function App() {
  //to keep a check who is signed in/making a listner
  const [{}, dispatch] = useStateValue();
  //This State will keep Track of what is entered in the searchField
  const [searchField, setSearchField] = useState('');

  //updating the State from Header Component which further updating itself from HeaderSearchBar.js
  let inputHandler = (event) => {
    setSearchField(event.target.value);
  };
  useEffect(() => {
    //will run only once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user logged in/the user was logged in
        {
          /*when someone will logg in it will shoot
          the user ibto the data layer and vice versa if we 
          logged out*/
        }
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/thanku">
              <Header />

              <Thanku />
            </Route>
            <Route path="/Payment">
              <Header />
              {/* wraps the payment elements,
          no need to understand it */}
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/checkout">
              <Header />
              <Checkout />
            </Route>

            <Route path="/books-toys">
              <Header />
              <Navbar />
              <BookToys />
            </Route>

            <Route path="/fashion-beauty">
              <Header />
              <Navbar />
              <FashionBeauty />
            </Route>

            <Route path="/electronics">
              <Header />
              <Navbar />
              <Electronics />
            </Route>

            <Route path="/">
              <Header inputHandler={inputHandler} />
              <Navbar />
              <Home text={searchField} />
              <AllCategories />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
