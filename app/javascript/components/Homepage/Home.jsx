import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Book from './Book'
import Header from '../Header'

const Home = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const url = `/api/v1/book`
        axios.get(url)
        .then( resp => setBooks(resp.data.data))
        .catch( data => console.log('error', data))
      }, [books?.length])
    
    const list = books.map(
        book_data => <Book key={book_data.id} attributes={book_data.attributes}/>
    )
    return (
        <div className='container-fluid text-bg-dark p-3'>
            <div className='container'>
                <Header />
                {list}
            </div>
        </div>
    );
}

export default Home