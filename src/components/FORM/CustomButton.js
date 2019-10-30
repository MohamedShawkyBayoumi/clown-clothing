import React from "react";

import "./FORM.scss";

const CustomButton = ({ children, isGoogleSignin, inverted, ...otherProps }) => {
    return (
        <button className={`custom-button ${inverted ? 'inverted' : ''} ${isGoogleSignin ? 'google-sign-in' : ''}`} {...otherProps}>
            {children}
        </button>
    );
}

export default CustomButton;