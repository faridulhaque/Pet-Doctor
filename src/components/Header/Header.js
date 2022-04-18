import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";

const Header = () => {
  // using useEffect and useState to find logged in user
  const [user, setUser] = useState({});
 useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      
      setUser(user);
      
    } else {
      setUser({});
    }
  });
 }, []);

//  signing out the user 
const makeSignOut = () =>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container-fluid">
        {/* name and brand ----------------------------------------------------------------
        -------------------------------------------------------*/}
        <Link className="navbar-brand ms-4" to="/">
          Pet Doctor
        </Link>

        {/* responsive navbar toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* All navbar items created with vanilla bootstrap */}


        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-4">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              {
                user.uid ? <div className="div-btn"> <button className="nav-signOut" onClick={makeSignOut}>Sign Out</button> </div> : <Link className="nav-link" to="/signIn">
                Sign In
              </Link>
              }
              
            </li>
            
          </ul>
        </div>

        {/* navbar ended here */}
        
      </div>
    </nav>
  );
};

export default Header;
