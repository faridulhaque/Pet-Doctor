import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase/firebase.init";
import "../CommonStyles/CommonStyles.css";
import "./SignIn.css";
const provider = new GoogleAuthProvider();

const SignIn = () => {
  const navigate = useNavigate();
  // function for sign in with email and password --------------------------------------------------------------------------------------------------------------------started
  const handleSignInForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    
    signInWithEmailAndPassword(auth, email, password)
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
  return (
    <div className="signIn">
      <div className="form-wrapper">
        <h2>Sign In to continue</h2>
        <Form onSubmit={handleSignInForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="Password" />
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
