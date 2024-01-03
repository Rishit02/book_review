import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";

const ReviewForm = (props) => {
    return (
        <>
        <br />
        <div className="container">
            <h1>Enter a review for {props.attributes.title}</h1>
            <Form onSubmit={props.handleSubmit}>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Enter Title</InputGroup.Text>
                <Form.Control
                name="title"
                placeholder="Title"
                aria-label="Enter Title"
                aria-describedby="basic-addon1"
                onChange={props.handleChange}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">Enter Rating</InputGroup.Text>
                <Form.Control
                name="score"
                placeholder="Rating"
                aria-label="rating"
                aria-describedby="basic-addon2"
                onChange={props.handleChange}
                />
            </InputGroup>

            <InputGroup>
                <InputGroup.Text>Enter Description</InputGroup.Text>
                <Form.Control 
                name="description"
                placeholder="Description"
                as="textarea"
                aria-label="description"
                onChange={props.handleChange}
                />
            </InputGroup>
            <br />
            <Button type="submit">
                Submit review
            </Button>
            
            </Form>
        </div>
        </>
    )
    
}

export default ReviewForm