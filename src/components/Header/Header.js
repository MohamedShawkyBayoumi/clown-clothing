import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { ReactComponent as CartIcon } from "../../assets/shopping-bag.svg";
import CartDropDown from "../CartDropDown/CartDropDown";
import { toggleCartHidden } from "../../redux/actions/cartActions";

import { createStructuredSelector } from "reselect";

import { selectCartItemsCount, selectCartHidden } from "../../utils/Memoization/cartSelectors";
import { selectCurrentUser } from "../../utils/Memoization/userSelectors";

import { connect } from "react-redux";

import "./Header.scss";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from "./HeaderStyles";

const Header = ({ currentUser, toggleCartHidden, hidden, itemCount }) => {
    console.log(currentUser);
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>
                {currentUser ? (
                    <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                ) : (
                    <OptionLink to="signin">SIGN IN</OptionLink>
                )}
                <div className="cart-icon" onClick={toggleCartHidden}>
                    <CartIcon className="shopping-icon" />
                    <span className="item-count">{itemCount}</span>
                </div>
            </OptionsContainer>
            {!hidden && <CartDropDown />}
        </HeaderContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);