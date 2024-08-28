import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Register.scss'
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    name:"",
    username:"",
    password:""
  });
  const [err, setErr] = useState(null);

  const handleChange=(event)=>{
    setFormData((prev)=>({...prev, [event.target.name]: event.target.value}));
  }
  const handleSubmit=async (event)=>{
    event.preventDefault();
    
    try{
      await axios.post("http://localhost:8800/api/auth/register", formData)
    }catch(err){
      setErr(err.response.data);
    }
  }

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
                <input type="email" placeholder='Email' name='email' onChange={handleChange}/>
                <input type="text" placeholder='Name' name='name' onChange={handleChange}/>
                <input type="text" placeholder='Username' name='username' onChange={handleChange}/>
                <input type="password" placeholder='Password' name='password' onChange={handleChange}/>
                {err && err}
                <button onClick={handleSubmit}>Sign Up</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Register
