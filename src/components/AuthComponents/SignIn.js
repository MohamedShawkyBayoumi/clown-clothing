import React, { Component } from "react";
import FormInput from "../FORM/FormInput";
import CustomButton from "../FORM/CustomButton";

import "./Auth.scss";

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({
            email: '',
            password: ''
        });
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({[name] : value});
    }

    render(){
        const { email, password } = this.state;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email"
                        name="email" 
                        value={email}
                        label="email"
                        handleChange={this.handleChange}
                        required 
                    />
                    <FormInput 
                        type="password"
                        name="password" 
                        value={password}
                        label="password"
                        handleChange={this.handleChange}
                        required 
                    />
                    <CustomButton type="submit">
                        Sign in
                    </CustomButton>
                </form>
            </div>
        );
    }   
}

export default SignIn;