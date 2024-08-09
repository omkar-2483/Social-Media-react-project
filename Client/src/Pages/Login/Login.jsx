import React from 'react'
import './Login.css'

function Login() {
  return (
    <div>
      <div className="formContainer">
        <div className="formWrap">
            <span>Login</span>
            <form>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <button>Login</button>
            </form>
            <p>Don't have an account <a href="">Register Here</a></p>
        </div>
      </div>
    </div>
  )
}

export default Login;
