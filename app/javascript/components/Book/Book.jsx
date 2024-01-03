import React, { useState, useEffect } from "react";
import Review from "./Review"
import Header from "./Header"
import axios from 'axios'
import { useParams } from 'react-router-dom';
import ReviewForm from "./ReviewForm";

const Book = (props) => {
    const [book, setBook] = useState([])
    const [review, setReview] = useState([])
    const [loaded, setLoaded] = useState(false)
    const param = useParams();

    useEffect(() => {
        const slug = param.slug
        const url = `/api/v1/book/${slug}`
        axios.get(url)
        .then(resp => {
            setBook(resp.data)
            setLoaded(true)
        })
        .catch(resp => console.log(resp))
    }, [])

    return (
        <div className="container-fluid text-bg-dark p-3 d-flex justify-content-center">
            <div className="container">
                {
                loaded &&
                <Header 
                    attributes={book.data.attributes} 
                    reviews={book.data.relationships.review} 
                />
                }
                <p>List of all the reviews</p>
            </div>
        </div>
    )
}

export default Book