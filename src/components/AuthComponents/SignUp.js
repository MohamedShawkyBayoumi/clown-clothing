import React, { Component } from "react";
import { connect } from "react-redux";

import FormInput from "../FORM/FormInput";
import CustomButton from "../FORM/CustomButton";

import { signUpStart } from "../../redux/actions/userActions";

import "./Auth.scss";

class SignUp extends Component {

    state = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    handleSubmit = async e => {
        const { displayName, email, password, confirmPassword } = this.state;
        const { signUpStart } = this.props;
        e.preventDefault();

        if(password != confirmPassword){
            alert("passwords don't match");
            return;
        }

        signUpStart({ displayName, email, password });

    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput 
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        label="Email"
                        required
                    />
                    <FormInput 
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        label="Password"
                        required
                    />
                    <FormInput 
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label="Confirm Password"
                        required
                    />
                    <CustomButton type="submit">SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);