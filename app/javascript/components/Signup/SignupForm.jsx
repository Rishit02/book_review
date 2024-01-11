import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import axios from 'axios'
import { NavLink, Link, useNavigate } from 'react-router-dom'

const SignupForm = (props) => {
    const [user, setUser] = useState({})
    const [error, setError] = useState([])
    const nav = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`api/v1/users`, {user})
        .then( resp => {
            console.log(resp)
            if (resp.data.status == "created") {
                console.log("user", user)
                props.handleLogin(resp.data)
                setUser({ username:"", password:"", password_confirmation:"" })
                setError("")
                nav("/")
            }
        })
        .catch(err => console.log("error", err))
    }
    const handleChange = (e) => {
        e.preventDefault()
        setUser(Object.assign({}, user, {[e.target.name]: e.target.value}))    
    }

    return (
        <div className="container">
            <h1>Signup Page</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="username" 
                        placeholder="Enter username" 
                        name="username" 
                        onChange={handleChange} 
                        value={user.username} />
                    {/* <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="Password" 
                        name="password" 
                        onChange={handleChange} 
                        value={user.password} />
                </Form.Group>
                {/* password confirmation */}
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="password_confirmation" 
                        name="password_confirmation" 
                        onChange={handleChange} 
                        value={user.password_confirmation} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Signup
                </Button>
            </Form>
        </div>
    );
}

export default SignupForm;