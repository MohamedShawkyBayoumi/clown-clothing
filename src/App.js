import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import './App.css';
import HomePage from "./containers/HomePage/HomePage";
import ShopPage from "./containers/ShopPage/ShopPage";
import CheckoutPage from "./containers/CheckoutPage/CheckoutPage";

import Header from "./components/Header/Header";


import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./utils/Memoization/userSelectors"


import AuthContainerPage from "./containers/AuthContainerPage/AuthContainerPage";

import { selectCollectionsForPreview } from "./utils/Memoization/shopSelectors";

import { checkUserSession } from "./redux/actions/userActions";


const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);



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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);