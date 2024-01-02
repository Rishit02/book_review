import React, { useState, useEffect } from "react";
import Review from "./Review"
import axios from 'axios'
import { useParams } from 'react-router-dom';


const Book = (props) => {
    const [books, setBooks] = useState([])
    const [reviews, setReviews] = useState([])
    const param = useParams();

    useEffect(() => {
        const slug = param.slug
        const url = `/api/v1/book/${slug}`
        axios.get(url)
        .then(resp => setBooks(resp.data))
        .catch(resp => console.log(resp))
    }, [])
    return (
        <div className="container">
            <h1>Hello world</h1>

        </div>
    )
}

export default Book