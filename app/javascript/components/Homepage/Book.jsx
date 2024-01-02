import React from 'react'
import { Link } from 'react-router-dom'

const Book = (props) => {
    return (
        <>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.attributes.title}</h5>
                <p className="card-subtitle mb-2 text-body-secondary">By {props.attributes.author}</p>
                <p className="card-text">Published: {props.attributes.publisher}</p>
                <p className="card-text">Genre: {props.attributes.genre}</p>
                <p className="card-text">Average Rating: {props.attributes.average_score}</p>
                <Link to={`/book/${props.attributes.slug}`} 
                    className='btn btn-primary'>
                    View Book
                </Link>
            </div>
        </div>
        <br />
        </>
    );
}

export default Book;