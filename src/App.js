import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from "./containers/HomePage/HomePage";
import ShopPage from "./containers/ShopPage/ShopPage";
import Header from "./components/Header/Header";
import SignIn from "./components/AuthComponents/SignIn";
import SignUp from "./components/AuthComponents/SignUp";

import { auth } from "./firebase/firebase.utils";

import AuthContainerPage from "./containers/AuthContainerPage/AuthContainerPage";


class App extends React.Component {

  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      });
      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    const { currentUser } = this.state;
    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={AuthContainerPage} />
          {/* <Route exact path="/signup" component={SignUp} /> */}
        </Switch>
      </div>
    );
  }
  
}

export default App;
