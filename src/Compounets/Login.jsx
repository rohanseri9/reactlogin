import React from 'react'
import { useNavigate} from "react-router-dom";



import "./App.css";


function Login() {
  const navigate=useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(e.target.email.value==="rohanseri9@gmail.com"){
          navigate('/dashboard');
        }else{
          alert("failes");
        }
      };
  
    


  return (
    
    <div className="container">


      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              id='username'
           
            />
          </div>
        
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              id='email'
          
         
            ></input>
          </div>
         
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id='password'
           
            />
          </div>
          
        <button>login</button>
        </div>
      </form>
    </div>
    
  )
}

export default Login;