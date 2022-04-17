import React from "react";
import './signUp.css';
import "../CommonStyles/CommonStyles.css";

const SignUp = () => {
    const handleSignUp =(e) =>{
        e.preventDefault();
        console.log('hello sign up')
    }
  return (
    <div className="signUp">
      <div className="signUp-form">
        <form onSubmit={handleSignUp}>
            <h2 className='mb-3 signup-h2'>Sign Up Now!</h2>
          <div className="input-group">
            <label htmlFor="email">Email address</label>
            <br/>
            <div className="input-container">
              <input
                className="input-box"
                type="email"
                name="email"
                id="email"
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="password">password</label>
            <br/>
            <div className="input-container">
              <input
                className="input-box"
                type="email"
                name="email"
                id="email"
              />
            </div>
          </div>
          <div className="input-group">
              
            <label htmlFor="password">Confirm Password</label>
            <br/>
            <div className="input-container">
              <input
                className="input-box"
                type="email"
                name="email"
                id="email"
              />
            </div>
          </div>
          <button type="submit" className='btn btn-white w-100 mt-3'>Sign up</button>
          <br/>
          <div className='breaking-line'>
            <div style={{borderTop: '1px solid black', width: '125px', marginTop: '20px'}}></div>
            <div style={{marginTop: '7px', padding: '0 5px'}}>or</div>
            <div style={{borderTop: '1px solid black', width: '125px', marginTop: '20px'}}></div>  
          </div>
          
          <button className='btn btn-danger w-100 mt-3'>Sign up with Google</button>
          

        </form>
      </div>
    </div>
  );
};

export default SignUp;
