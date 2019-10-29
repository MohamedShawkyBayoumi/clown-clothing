import React, { Component } from "react";
import FormInput from "../FORM/FormInput";
import CustomButton from "../FORM/CustomButton";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./Auth.scss";

class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            });

        }catch(e){
            console.log(e);
        }

        
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
                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignin>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }   
}

export default SignIn;