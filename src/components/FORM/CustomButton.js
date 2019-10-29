import React from "react";

import "./FORM.scss";

const CustomButton = ({ children, isGoogleSignin, ...otherProps }) => {
    return (
        <button className={`custom-button ${isGoogleSignin ? 'google-sign-in' : ''}`} {...otherProps}>
            {children}
        </button>
    );
}

export default CustomButton;