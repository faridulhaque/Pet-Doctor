import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CommonStyles/CommonStyles.css";
import './SignIn.css';

const SignIn = () => {
    const handleSignInForm = (e) =>{
        e.preventDefault();
        console.log('hello world');
    }
  return (
    <div className="signIn">
      <div className="form-wrapper">
        <h2>Sign In to continue</h2>
        <Form onSubmit={handleSignInForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <small>Already have an account?{" "}<Link to="/signUp">Click here</Link></small>
          
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Already have an account?" />
          </Form.Group> */}
          <br/>
          <Button className='mt-3' variant="primary" type="submit">
            Sign In
          </Button>
          <div className='breaking-line'>
            <div style={{borderTop: '1px solid black', width: '125px', marginTop: '20px'}}></div>
            <div style={{marginTop: '7px', padding: '0 5px'}}>or</div>
            <div style={{borderTop: '1px solid black', width: '125px', marginTop: '20px'}}></div>  
          </div>
          <button className='btn btn-danger w-100 mt-3'>Sign in with Google</button>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
