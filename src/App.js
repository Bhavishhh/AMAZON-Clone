import React, { useEffect } from "react";
import './App.css';
import Header from "./header";
import Home from "./Home";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Checkout from "./checkout";
import Login from "./login";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("<pk_test_51NmwiKSDEgFsfmUBIWzv1qchqN2KWoWxtyDiCRVTxa1Us0BQYLaVIBcP03sSsmWTQNjLmLqrxzn8DHVsVl805BVD00Ubj6bY4w>");


function App() {
  const [{},dispatch] = useStateValue();

  

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('THE USER IS >>>',authUser);
      if(authUser){
        //the user just logged in / the user was logged in
        dispatch({
          type:'SET_USER',
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
    //BEM
    <Router>
      <div className="app">
        
        <Routes>
          <Route path="/login" element={<><Login /></>}></Route>
          <Route path="/checkout" element={<><Header /><Checkout /></>}></Route>
          <Route path="/payment" element={<><Header /><Elements stripe={promise}><Payment /></Elements></>}></Route>
          <Route path="/" element={<><Header /><Home /></>}></Route>
        </Routes>
      </div>
    </Router>
    


  );

}

export default App;
