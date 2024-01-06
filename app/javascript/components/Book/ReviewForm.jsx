import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import { useParams } from "react-router-dom";
import styled from 'styled-components'

const RatingContainer = styled.div`
  text-align: center;
  font-size:20px;
  padding: 40px 0 10px 0;
  margin: 20px 0;
  padding:20px;
`

const RatingBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: left;
  overflow: hidden;
  flex-direction: row-reverse;
  position: relative;

  input { display: none; }

  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-top: auto;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23e3e3e3' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 76%;
    transition: .3s;
  }

  input:checked ~ label, input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23fcd93a' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
  }


  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23d8b11e' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
  }
`

const RatingBoxTitle = styled.div`
  font-size: 20px;
  padding-bottom: 20px;
  font-weight: bold;
`

const ReviewForm = (props) =>{
    const ratingOptions = [5,4,3,2,1].map((score, index) => {
      return (
        <React.Fragment key={index}>
          <input type="radio" value={score} checked={props.review.score == score} onChange={()=>console.log('onChange')} name="rating" id={`rating-${score}`}/>
          <label onClick={props.setRating.bind(this, score)}></label>
        </React.Fragment>
      )
    })

    return (
        <div className="container">
            <h1>Enter a review for: "{props.attributes.title}"</h1>
            <form onSubmit={props.handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title </label><br />
                    <input
                        name="title"
                        placeholder="Title"
                        aria-label="Enter Title"
                        // aria-describedby="basic-addon1"
                        onChange={props.handleChange}
                        value={props.review.title}
                        />      
                </div>
                <div className="mb-3">
                    <label className="form-label">Description </label><br />
                    <input
                        name="description"
                        placeholder="Description"
                        as="textarea"
                        aria-label="description"
                        onChange={props.handleChange}
                        value={props.review.description}
                    />
                </div>
                <div>
                    <RatingBox>
                        {ratingOptions}
                    </RatingBox>
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            {/* <Form onSubmit={props.handleSubmit}>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Enter Title</InputGroup.Text>
                <Form.Control
                name="title"
                placeholder="Title"
                aria-label="Enter Title"
                aria-describedby="basic-addon1"
                onChange={props.handleChange}
                value={props.review.title}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon2">Enter Rating</InputGroup.Text>
            </InputGroup>

            <InputGroup>
                <InputGroup.Text>Enter Description</InputGroup.Text>
                <Form.Control 
                name="description"
                placeholder="Description"
                as="textarea"
                aria-label="description"
                onChange={props.handleChange}
                value={props.review.description}
                />
            </InputGroup>
            <br />
            <Button type="submit">
                Submit review
            </Button>
            </Form> */}
        </div>
    )   
}

export default ReviewForm