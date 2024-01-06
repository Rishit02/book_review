import React, { useState, useEffect } from "react";
import Review from "./Review"
import Header from "./Header"
import axios from 'axios'
import { useParams } from 'react-router-dom';
import ReviewForm from "./ReviewForm";

const Book = (props) => {
    const [book, setBook] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState([])
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
    }, [review])

    const setRating = (score, e) => {
        e.preventDefault()  
        setReview({ ...review, score })
      }

    const handleChange = (e) => {
        e.preventDefault()
        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))    
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        // const csrfToken = document.querySelector('[name=csrf-token]').content
        // axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        const slug = param.slug
        const book_id = parseInt(book.data.id)
        review.book_id = book_id

        axios.post(`/api/v1/book/${slug}/review`, review)
        .then( resp => {
        //   setReviews([...reviews, resp.data.data])
          setReview({ title:"", description:"", score:0 })
          setError("")
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
        <div className="container-fluid text-bg-dark p-3 d-flex justify-content-center">
            <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <br />
                    {
                    loaded &&
                    <Header 
                    attributes={book.data.attributes} 
                    reviews={book.data.relationships.review} 
                    />
                    }

                </div>
                <div className="col-sm-4">
                    {
                    loaded &&
                    <ReviewForm 
                    attributes={book.data.attributes} 
                    handleChange={handleChange} 
                    handleSubmit={handleSubmit} 
                    setRating={setRating}
                    review={review} />
                    }
                </div>
            </div>
            </div>
        </div>
    )
}

export default Book