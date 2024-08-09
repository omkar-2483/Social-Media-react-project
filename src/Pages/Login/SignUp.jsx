import React from 'react'
import './Login.css'

function SignUp() {
  return (
    <div>
      <div className="formContainer">
      <div className="formWrap">
            <span>Sign up</span>
            <form>
                <input type="email" placeholder='Email'/>
                <input type="text" name="username" placeholder='Username' />
                <input type="password" placeholder='Password'/>
                <button>Sign Up</button>
            </form>
            <p>Already have an account <a href="">Login Here</a></p>
        </div>
      </div>
    </div>
  )
}

export default SignUp