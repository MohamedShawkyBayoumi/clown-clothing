import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import './App.css';
import HomePage from "./containers/HomePage/HomePage";
import ShopPage from "./containers/ShopPage/ShopPage";
import CheckoutPage from "./containers/CheckoutPage/CheckoutPage";

import Header from "./components/Header/Header";
import { setCurrentUser } from "./redux/actions/userActions";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./utils/Memoization/userSelectors"
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import AuthContainerPage from "./containers/AuthContainerPage/AuthContainerPage";


class App extends React.Component {

  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount(){

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
          
          
          
        })
      } else {
        setCurrentUser(userAuth);
      }

      

    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    const { currentUser } = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={() => (
            currentUser ? <Redirect to="/" /> : <AuthContainerPage />
          )} />
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);