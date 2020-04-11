import React, { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { GlobalStyle } from './global.styles';

// import HomePage from "./containers/HomePage/HomePage";
// import ShopPage from "./containers/ShopPage/ShopPage";
// import CheckoutPage from "./containers/CheckoutPage/CheckoutPage";

import Header from "./components/Header/Header";
import Spinner from "./components/spinner/Spinner";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./utils/Memoization/userSelectors"


// import AuthContainerPage from "./containers/AuthContainerPage/AuthContainerPage";

import { selectCollectionsForPreview } from "./utils/Memoization/shopSelectors";

import { checkUserSession } from "./redux/actions/userActions";
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const HomePage = lazy(() => import("./containers/HomePage/HomePage"));
const ShopPage = lazy(() => import ("./containers/ShopPage/ShopPage"));
const CheckoutPage = lazy(() => import ("./containers/CheckoutPage/CheckoutPage"));
const AuthContainerPage = lazy(() => import("./containers/AuthContainerPage/AuthContainerPage"));

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);



  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/signin" render={() => (
              currentUser ? <Redirect to="/" /> : <AuthContainerPage />
            )} />
          </Suspense>
        </ErrorBoundary>
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