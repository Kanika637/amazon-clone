import './App.css';
import React,{useEffect} from 'react';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router ,Switch,Route}
from "react-router-dom";

import Checkout from './Checkout'
import Login from "./Login"; 
import {auth} from "./firebase"; 
import {useStateValue} from './StateProvider'
import Payment from "./Payment";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import Thanku from './Thanku';

// import Footer from './Footer';




const stripePromise=loadStripe('pk_test_51JdCsbSDjgMnau9ncKpDOaddNIWtdhVTTV92V4ShkTzLec033vWcRQjqEUByb1s4D6vmPmH6oMK0bkBJyBlRsStp00wQV1pNuX');
function App() {
const[{},dispatch]=useStateValue();
  //to keep a check who is signed in/making a listner
  
  useEffect(()=>{
    //will run only once when the app component loads
    auth.onAuthStateChanged(authUser=>{
      console.log('USER IS >>>>',authUser);
      if(authUser){
        //the user logged in/the user was logged in
        {/*when someone will logg in it will shoot
          the user ibto the data layer and vice versa if we 
          logged out*/}
        dispatch({
          
          type: 'SET_USER',
          user:authUser
        })
      }
      else{
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })


  },[])
  return (
    <Router>
    <div className="App">

      <Switch>
      
      <Route path="/thanku">
        <Header/>
          <Thanku/>
          </Route>
        <Route path="/Payment">
          <Header/>
          {/* wraps the payment elements,
          no need to understand it */}
          <Elements stripe={stripePromise}>
      <Payment/>
    </Elements>
          
        
          
          </Route>
        <Route path="/login">
          <Login/>
          </Route>
        <Route path="/checkout">
         <Header/> 
          <Checkout/>
          </Route>
<Route path="/">
      <Header/>
      <Home/>
      </Route>
      </Switch>
      {/* <Footer/> */}
    </div>
    </Router>
  );
}

export default App;
