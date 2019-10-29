import React from "react";
import "./auth-container-page.scss";
import SignIn from "../../components/AuthComponents/SignIn";

const AuthContainerPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
        </div>
    );
}

export default AuthContainerPage;