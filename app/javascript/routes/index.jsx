import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Homepage/Home";
import Navbar from "../components/Navbar";
import Book from "../components/Book/Book"
import ReviewForm from "../components/Book/ReviewForm";

export default (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:slug" element={<Book />} />
        <Route path="/book/:slug/add-review" element={<ReviewForm />}/>
      </Routes>
    </Router>
  </>
);