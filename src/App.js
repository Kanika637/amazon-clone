 import React, { useEffect, useState } from 'react';
import Home from './pages/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './components/checkOut/Checkout';
import Login from './pages/login/Login';
import { auth } from './firebase';
import { useStateValue } from './context/StateProvider';
import Payment from './components/payment/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Thanku from './pages/thanku/Thanku';
import Navbar from './components/navbar/Navbar';
import BookToys from './Categories/BooksToys/BookToys';
import AllCategories from './Categories/AllCategories';
import FashionBeauty from './Categories/FashionBeauty/FashionBeauty';
import Electronics from './Categories/Electronics/Electronics';
import Signup from './pages/signup/Signup';
import Layout from './components/Layout/Layout';

const stripePromise = loadStripe(
  'pk_test_51JdCsbSDjgMnau9ncKpDOaddNIWtdhVTTV92V4ShkTzLec033vWcRQjqEUByb1s4D6vmPmH6oMK0bkBJyBlRsStp00wQV1pNuX'
);

function App() {
  const [{ }, dispatch] = useStateValue();
  const [searchField, setSearchField] = useState('');

  let inputHandler = (event) => {
    setSearchField(event.target.value);
  };

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
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
              <Layout>
                <Thanku />
              </Layout>
            }
          />
          <Route
            path="/Payment"
            element={
              <Layout>
                <Elements stripe={stripePromise}>
                  <Payment />
                </Elements>
              </Layout>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/checkout"
            element={
              <Layout>
                <Checkout />
              </Layout>
            }
          />
          <Route
            path="/books-toys"
            element={
              <Layout>
                <Navbar />
                <BookToys />
              </Layout>
            }
          />
          <Route
            path="/fashion-beauty"
            element={
              <Layout>
                <Navbar />
                <FashionBeauty />
              </Layout>
            }
          />
          <Route
            path="/electronics"
            element={
              <Layout>
                <Navbar />
                <Electronics />
              </Layout>
            }
          />
          <Route
            path="/"
            element={
              <Layout inputHandler={inputHandler}>
                <Navbar />
                <Home text={searchField} />
                <AllCategories />
              </Layout>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;