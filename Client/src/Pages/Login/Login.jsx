import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import './Login.scss'
import { AuthContext } from '../../context/AuthContext';

function Login() {
  const { login } = useContext(AuthContext);

  const handleLogin=()=>{
    login();
  }
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
            <h1>Hello World!</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque laudantium quia tenetur possimus cumque</p>
            <span>Don't have an account?</span>
            <Link to="/register"><button>Register</button></Link>
        </div>
        <div className="right">
            <h1>Login</h1>
            <form action="">
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password' />
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
