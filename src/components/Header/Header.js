import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { ReactComponent as CartIcon } from "../../assets/shopping-bag.svg";
import CartDropDown from "../CartDropDown/CartDropDown";
import { toggleCartHidden } from "../../redux/actions/cartActions";

import { selectCartItemsCount } from "../../utils/cartSelectors";

import { connect } from "react-redux";

import "./Header.scss";

const Header = ({ currentUser, toggleCartHidden, hidden, itemCount }) => {
    console.log(currentUser);
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {currentUser ? (
                    <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
                ) : (
                    <Link to="signin" className="option">SIGN IN</Link>
                )}
                <div className="cart-icon" onClick={toggleCartHidden}>
                    <CartIcon className="shopping-icon" />
                    <span className="item-count">{itemCount}</span>
                </div>
            </div>
            {!hidden && <CartDropDown />}
        </div>
    );
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden,
    itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);