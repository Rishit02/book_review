import React from "react";
import LoginForm from './LoginForm'

const LoginPage = (props) => {
    return (
        <div className="container-fluid ">
            <LoginForm handleLogin={props.handleLogin} />
        </div>
    );
}

export default LoginPage;