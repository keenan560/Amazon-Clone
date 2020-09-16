import React, { useEffect } from "react";
import './App.css';
import Header from './Header'
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HQhQtKmdphqYh3kP9BweBeVJUTYYGf86vpjTvE8r9HMF9sTvlLV98igoJNcDIj60twBP888vRjjBHrV6h4kREsB00iOr3akI7"
);

function App() {

  const [{}, dispatch] = useStateValue();


 useEffect(() => {
   // will only run once when the app component loads...

   auth.onAuthStateChanged((authUser) => {
     console.log("THE USER IS >>> ", authUser);

     if (authUser) {
       // the user just logged in / the user was logged in

       dispatch({
         type: "SET_USER",
         user: authUser,
       });
     } else {
       // the user is logged out
       dispatch({
         type: "SET_USER",
         user: null,
       });
     }
   });
 }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exaxt path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
