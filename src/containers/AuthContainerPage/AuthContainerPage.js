import React from "react";
import "./auth-container-page.scss";
import SignIn from "../../components/AuthComponents/SignIn";
import SignUp from "../../components/AuthComponents/SignUp";

const AuthContainerPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    );
}

export default AuthContainerPage;