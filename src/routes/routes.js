import React, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AllCategories from '../Categories/AllCategories';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Header from '../components/header/Header';
import Thanku from '../pages/thanku/Thanku';
import Payment from '../components/payment/Payment';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import Checkout from '../components/checkOut/Checkout';
import BookToys from '../Categories/BooksToys/BookToys';
import HeaderWithNavbar from '../layouts/headerWithNavbar/headerWithNavbar';
import FashionBeauty from '../Categories/FashionBeauty/FashionBeauty';
import Electronics from '../Categories/Electronics/Electronics';
import { useStateValue } from '../context/StateProvider';
import { auth } from '../firebase';
import { Footer } from 'antd/lib/layout/layout';
import HeaderHomeLayout from '../layouts/headerWithNavbar/headerHomeLayout';

const stripePromise = loadStripe(
  'pk_test_51JdCsbSDjgMnau9ncKpDOaddNIWtdhVTTV92V4ShkTzLec033vWcRQjqEUByb1s4D6vmPmH6oMK0bkBJyBlRsStp00wQV1pNuX'
);

function AppRoutes() {

//to keep a check who is signed in/making a listner
const [{}, dispatch] = useStateValue();

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
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route
          path="/thanku"
          element={
            <>
              <Header/>
              <Thanku/>
            </>
          }
        />
        <Route
          path="/Payment"
          element={
            <>
              <Header />
              {/* wraps the payment elements, no need to understand it */}
              <Elements stripe={stripePromise}>
              <Payment/>
              </Elements>
            </>
          }
        />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/checkout"
          element={
            <>
              <Header />
              <Checkout />
            </>
          }
        />
        <Route
          path="/books-toys"
          element={
            <>
               <HeaderWithNavbar>  <BookToys /></HeaderWithNavbar> 
            </>
          }
        />
        <Route
          path="/fashion-beauty"
          element={ <HeaderWithNavbar> <FashionBeauty /> </HeaderWithNavbar> }
        />

        <Route
          path="/electronics"
          element={
            <>
            <HeaderWithNavbar> <Electronics /> </HeaderWithNavbar>
            </>
          }
        />

        <Route
          path="/"
          element={
            <>
             <HeaderHomeLayout> <AllCategories /></HeaderHomeLayout>
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
  );
}

export default AppRoutes;