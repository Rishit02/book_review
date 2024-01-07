import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import ReviewForm from "./ReviewForm";

const Header = (props) => {
    const { title, author, publisher, genre, average_score } = props.attributes
    const lngth = props.lngth

    return (
        <div className="container">
            <div className="text-bg-dark p-3">
                <h1 className="card-title">{title}</h1>
                <p className="card-subtitle mb-2">By {author}</p>
                <p className="card-text">Published by: {publisher}</p>
                <p className="card-text">Genre: {genre}</p>
                <p className="card-text">Average rating: {average_score}</p>
                <p className="card-text">Total number of reviews: {lngth}</p>
            </div>
        </div>
    )
}

export default Header