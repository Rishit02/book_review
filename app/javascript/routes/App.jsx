import React, { useState, useEffect } from "react";
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Homepage/Home";
import Navbar from "../components/Navbar";
import Book from "../components/Book/Book"
import ReviewForm from "../components/Book/ReviewForm";
import LoginPage from "../components/Login/LoginPage";
import SignupPage from "../components/Signup/SignupPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    loginStatus();
  }, []);

  const loginStatus = () => {
    axios.get('/logged_in', {withCredentials: true})
      .then(response => {
        if (response.data.logged_in) {
          handleLogin(response);
        } else {
          handleLogout();
        }
      })
      .catch(error => console.log('api errors:', error));
  }

  const handleLogin = (data) => {
    setIsLoggedIn(true);
    setUser(data.user);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser({});
  }

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:slug" element={<Book />} />
          <Route path="/book/:slug/add-review" element={<ReviewForm />} />
          <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
          <Route path="/signup" element={<SignupPage handleLogin={handleLogin} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
