import React, {useEffect} from "react";
import "./App.css";
import Header from './Header';
import Home from './Home'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import Footers from "./Footers";
import ViewMore from "./ViewMore"
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51HQvfzGnX6tvw2VT5Wtqmq3hTJxspdZSvDR1sBV2wwL8NyD6UqmPa0CFaRCxpyRXyuUEeSWf6FRJVpZkJDFZAmel00eDbtLRAd');
function App() {
  const [{}, dispatch]= useStateValue();

  useEffect(()=> {
    //will only run once when the app component loads...

    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>>>> ', authUser);

      if(authUser){
        //the userjust logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user:authUser
        })
      }else{
        //the user is logged out

        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    } )
  }, [])
  return (
    //BEM
    <Router>
      <div className="app">
       
          <Switch>
          <Route path='/viewMore'>
            <Header />
              <ViewMore />
              <Footers />
            </Route>
            <Route path='/orders'>
            <Header />
              <Orders />
              <Footers />
            </Route>
          <Route path='/login'>
              
              <Login />
              <Footers />
            </Route>
          <Route path='/checkout'>
               {/* Header */}
              <Header />
              <Checkout />
              <Footers />
            </Route>
            <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />

            </Elements>
            <Footers />
            </Route>
            <Route path='/'> {/* Always make sure root is at the end or it will never get listened to */}
              {/* Header */}
                <Header />
              {/* Home */}
              <Home />
              <Footers />
            </Route>
          </Switch>
          
      </div>

    </Router>
  );
}

export default App;
