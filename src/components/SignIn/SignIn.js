import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";
import "../CommonStyles/CommonStyles.css";
import "./SignIn.css";

const provider = new GoogleAuthProvider();

const SignIn = () => {
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
    } else {
      setPassword({ value: event, error: "" });
    }
  };

  // function for sign in with email and password --------------------------------------------------------------------------------------------------------------------started
  const handleSignInForm = (e) => {
    e.preventDefault();
    

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  // function for sign in with email and password done--------------------------------------------------------------------------------------------------------------------done

  // -------------------------------------

  // function for sign in with google popup  started--------------------------------------------------------------------------------------------------------------------started
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  // function for sign in with google popup  ended--------------------------------------------------------------------------------------------------------------------ended
  // -------------------------------------
  // password reset function --------------------------------
  const resetPassword = () => {
    if(email.value){
      sendPasswordResetEmail(auth, email.value)
      .then(() => {
        toast.success('check your email to reset your password',{id: 'emailVerify'});
        console.log('link sent')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
    }
    else{
      setEmail({ value:'', error: 'Email required'})
    }
    
  };
  return (
    <div className="signIn">
      <div className="form-wrapper">
        <h2>Sign In to continue</h2>
        <Form onSubmit={handleSignInForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={(event) => getEmail(event.target.value)}
              type="email"
              name="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <br />
            {email?.error && (
              <small style={{ color: "red" }}>{email.error}</small>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={(event) => getPassword(event.target.value)}
              type="password"
              name="password"
              placeholder="Password"
            />
            <br />
            {password?.error && (
              <small style={{ color: "red" }}>{password.error}</small>
            )}
          </Form.Group>
          <small>
            New here? <Link to="/signUp">Create an account</Link>
          </small>

          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Already have an account?" />
          </Form.Group> */}
          <br />
          <Button className="mt-3" variant="primary" type="submit">
            Sign In
          </Button>
          <br />
          <small>
            Forgot Password?{" "}
            <button onClick={resetPassword} className="button-fp">
              Click here
            </button>
          </small>
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
            onClick={signInWithGoogle}
            className="btn btn-danger w-100 mt-3"
          >
            Sign in with Google
          </button>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
