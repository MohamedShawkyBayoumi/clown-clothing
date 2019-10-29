import React, { Component } from "react";

import FormInput from "../FORM/FormInput";
import CustomButton from "../FORM/CustomButton";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

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
        e.preventDefault();

        if(password != confirmPassword){
            alert("passwords don't match");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        }catch(e){
            console.error(e);
        }

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

export default SignUp;