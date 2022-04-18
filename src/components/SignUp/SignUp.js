import React, { useState } from "react";
import "./signUp.css";
import "../CommonStyles/CommonStyles.css";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";
import toast from "react-hot-toast";


const provider = new GoogleAuthProvider();

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const getEmail = (event) => {
    if (/\S+@\S+\.\S+/.test(event)) {
      setEmail({ value: event, error: "" });
    } else {
      setEmail({ value: "", error: "Invalid Email" });
    }
  };
  const getPassword = (event) => {
    if (event.length <= 7) {
      setPassword({
        value: "",
        error: "password must contain at least 8 characters.",
      });
    }
    
    else {
      setPassword({ value: event, error: "" });
    }
  };
  // function for sign up/register with email and password --------------------------------------------------------------------------------------------------------------------started
  const handleSignUp = (e) => {
    e.preventDefault();
    

   
   

    if (email.value && password.value) {
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          emailVerify();
          toast.success('check your email',{id: 'emailVerify'});
          navigate("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  };
  const emailVerify =()=>{
    sendEmailVerification(auth.currentUser)
  .then(() => {
    console.log('email sent');
  });
  }

  // function for sign up/register with email and password done--------------------------------------------------------------------------------------------------------------------done

  // function for sign up/register with google--------------------------------------------------------------------------------------------------------------------
  const handleGoogleSignUp = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };
  // function for sign up/register with google--------------------------------------------------------------------------------------------------------------------done
  return (
    <div className="signUp">
      <div className="signUp-form">
        <form onSubmit={handleSignUp}>
          <h2 className="mb-3 signup-h2">Sign Up Now!</h2>
          <div className="input-group">
            <label htmlFor="email">Email address</label>
            <br />
            <div className="input-container">
              <input
                onBlur={(event) => getEmail(event.target.value)}
                className="input-box"
                type="email"
                name="email"
                id="email"
              />
              <br />
              {email?.error && (
                <small style={{ color: "white" }}>{email.error}</small>
              )}
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="password">password</label>
            <br />
            <div className="input-container">
              <input
                onBlur={(event) => getPassword(event.target.value)}
                className="input-box"
                type="password"
                name="password"
                id="password"
              />
              <br />
              {password?.error && (
                <small style={{ color: "white" }}>{password.error}</small>
              )}
            </div>
          </div>

          <button type="submit" className="btn btn-white w-100 mt-3">
            Sign up
          </button>
          <small className="small-text mt-2">
            Already have an account? <Link to="/signIn">Sign In</Link>
          </small>
          <br />
          <div className="breaking-line">
            <div
              style={{
                borderTop: "1px solid black",
                width: "125px",
                marginTop: "20px",
              }}
            ></div>
            <div style={{ marginTop: "7px", padding: "0 5px" }}>or</div>
            <div
              style={{
                borderTop: "1px solid black",
                width: "125px",
                marginTop: "20px",
              }}
            ></div>
          </div>

          <button
            onClick={handleGoogleSignUp}
            className="btn btn-danger w-100 mt-3"
          >
            Sign up with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
