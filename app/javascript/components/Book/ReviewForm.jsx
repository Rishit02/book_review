import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const ReviewForm = (props) => {
    const [review, setReview] = useState({})


    const handleChange = (e) => {
        e.preventDefault()
        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))    
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    
        const book_id = parseInt(props.attributes.id)
        axios.post(`/api/v1/book/${props.attributes.slug}/review`, { review, book_id })
        .then( resp => {
        //   setReviews([...reviews, resp.data.data])
          setReview({ title: '', description: '', score: 0 })
          setError('')
        })
        .catch( resp => {
          let error
          switch(resp.message){
            case "Request failed with status code 401":
              error = 'Please log in to leave a review.'
              break
            default:
              error = 'Something went wrong.'
          }
          setError(error)
        })
      }

    return (
        <>
        <br />
        <div className="container">
            <h1>Enter a review</h1>
            <Form>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Title: </InputGroup.Text>
                <Form.Control
                placeholder="Enter Title"
                aria-label="title"
                aria-describedby="basic-addon1"
                onChange={handleChange}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">Enter Rating</InputGroup.Text>
                <Form.Control
                placeholder="Enter rating"
                aria-label="rating"
                aria-describedby="basic-addon2"
                onChange={handleChange}
                />
            </InputGroup>

            <InputGroup>
                <InputGroup.Text>Enter Description</InputGroup.Text>
                <Form.Control 
                placeholder="Enter Description"
                as="textarea"
                aria-label="description"
                onChange={handleChange}
                />
            </InputGroup>
            <br />
            <Link to={`/book/${props.attributes.slug}`}>
                <Button type="submit" onSubmit={handleSubmit}>
                    Submit review
                </Button>
            </Link>
            
            </Form>
        </div>
        </>
    )
    
}

export default ReviewForm