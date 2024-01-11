import React from "react";
import SignupForm from './SignupForm'

const SignupPage = (props) => {
    return (
        <div className="container-fluid ">
            <SignupForm handleLogin={props.handleLogin} />
        </div>
    );
}

export default SignupPage;