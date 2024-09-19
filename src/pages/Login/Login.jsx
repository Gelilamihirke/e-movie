import React, { useState } from 'react'
import './Login.css' // Importing the CSS file for Login component styling
import logo from '../../assets/logo.png' // Importing the logo image
import { login, signup } from '../../firebase' // Importing Firebase functions for authentication

const Login = () => {
  const [signState, setSignState] = useState("Sign In") // State to track if the user is signing in or signing up
  const [name, setName] = useState(""); // State to hold the user's name (for sign-up)
  const [email, setEmail] = useState(""); // State to hold the user's email
  const [password, setPassword] = useState(""); // State to hold the user's password
  
  // Function to handle user authentication (sign in or sign up)
  const user_auth = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    if (signState === "Sign In") {
      await login(email, password); // Call the login function if in "Sign In" state
    } else {
      await signup(name, email, password); // Call the signup function if in "Sign Up" state
    }
  }

  return (
    <div className='login'> {/* Main login page container */}
      <img src={logo} className='login-logo' alt=''/> {/* Netflix logo */}

      <div className='login-form'> {/* Form container */}
        <h1>{signState}</h1> {/* Display "Sign In" or "Sign Up" based on the state */}

        <form> {/* Form for authentication */}
          {/* Render name input only if in "Sign Up" state */}
          {signState === "Sign Up" ?
            <input value={name} onChange={(e) => setName(e.target.value)} 
            type='text' placeholder='Your name' /> : null }

          <input value={email} onChange={(e) => setEmail(e.target.value)} 
          type='email' placeholder='Email' /> {/* Input for email */}
          
          <input value={password} onChange={(e) => setPassword(e.target.value)} 
          type='password' placeholder='Password' /> {/* Input for password */}

          <button onClick={user_auth} type='submit'>{signState}</button> {/* Submit button, toggles between "Sign In" and "Sign Up" */}
          
          <div className='form-help'> {/* Help section */}
            <div className='remember'>
              <input type='checkbox' /> {/* Checkbox for "Remember Me" */}
              <label htmlFor=''>Remember Me</label>
            </div>
            <p>Need Help?</p> {/* "Need Help?" link */}
          </div>
        </form>

        <div className="form-switch"> {/* Toggle between "Sign In" and "Sign Up" */}
          {signState === "Sign In" ? 
            <p>New to Netflix? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span></p> :
            <p>Already have an account? <span onClick={() => setSignState("Sign In")}>Sign In Now</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login
