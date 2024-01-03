import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Header = (props) => {
    const [attributes, setAttributes] = useState([])
    const { title, author, publisher, genre, average_score } = props.attributes
    const total = props.reviews.data.length
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6"><h1>{title}</h1></div>
                <div className="col-sm-4">
                    <Button as={Link}
                        to={`/book/${props.attributes.slug}/add-review`} 
                        attributes={props.attributes}>
                        Add Review
                    </Button>
                </div>
            </div>
            
            <p>By {author}</p>
            <p>Published by: {publisher}</p>
            <p>Genre: {genre}</p>
            <p>Average rating: { average_score}</p>
            <p>Total number of reviews: {total}</p>
        </div>
    )
}

export default Header