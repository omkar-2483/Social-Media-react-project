import React from 'react'
import { Link } from 'react-router-dom'
import './Register.scss'

function Register() {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
            <h1>Social Net!</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque laudantium quia tenetur possimus cumque</p>
            <span>Already have an account?</span>
            <Link to='/login'><button>Login</button></Link>
        </div>
        <div className="right">
            <h1>Register</h1>
            <form action="">
                <input type="email" placeholder='Email'/>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password' />
                <button>Sign Up</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Register
