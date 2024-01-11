import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LoginForm = (props) => {
    const [user, setUser] = useState({})
    const [error, setError] = useState([])
    const nav = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`/api/v1/login`, {user}, {withCredentials: true})
        .then( resp => {
            console.log("This is the response from the post api request to login: ", resp)
            if (resp.data.logged_in) {
                console.log("user", user)
                props.handleLogin(resp.data)
                setUser({ username:"", password:"" })
                setError("")
                nav("/")
            } else {
                setError(response.data.errors)
            }
        })
        .catch(resp => console.log("errors: ", resp))
    }
    const handleChange = (e) => {
        e.preventDefault()
        setUser(Object.assign({}, user, {[e.target.name]: e.target.value}))    
    }

    return (
        <div className="container">
            <h1>Login Page</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
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
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default LoginForm;