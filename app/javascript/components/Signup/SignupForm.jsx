import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import axios from 'axios'
import { NavLink, Link, useNavigate } from 'react-router-dom'

const SignupForm = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState([])
    const nav = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault()
        user.password_confirmation = user.password
        axios.post(`/users/signup`, {user})
        .then( resp => {
            console.log("user", user)
            setUser({ email:"", password:"" })
            setError("")
            nav("/")
        })
        .catch(resp => console.log(resp))
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
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        name="email" 
                        onChange={handleChange} 
                        value={user.email} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                        placeholder="Password" 
                        name="password" 
                        onChange={handleChange} 
                        value={user.password} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Signup
                </Button>
            </Form>
        </div>
    );
}

export default SignupForm;