import React, { useContext, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import './Login.scss'
import { AuthContext } from '../../context/AuthContext';

function Login() {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username:"",
    password:""
  });
  const [err, setErr] = useState(null);
  const nevigate = useNavigate();

  const handleChange=(event)=>{
    setFormData((prev)=>({...prev, [event.target.name]: event.target.value}));
  }
  const handleLogin= async(e)=>{
    e.preventDefault();
    try{
      login(formData);
      nevigate("/")
    }catch(err){
      setErr(err.res.data);
    }
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
                <input type="text" placeholder='Username' name='username' onChange={handleChange}/>
                <input type="password" placeholder='Password' name='password' onChange={handleChange}/>
                {err && err}
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
