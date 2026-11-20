import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../login.css'
import hi from'../assets/hi.png'

function Login() {
  
  const USER_EMAIL='admin@gmail.com'
  const USER_PASSWORD = 'admin@123'  

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()
  
  const handleLogin = (e)=>{
     e.preventDefault()

     if(email==USER_EMAIL && password==USER_PASSWORD)
     {
        setError('')
        navigate('/basic')
     }
     else{
        setError('Invalid user or password')
     }
  }

  return (
   <div className='test'>
    <form onSubmit={handleLogin} autoComplete="off" className='login-mod'>
        <h3>Sign In</h3>
        <h1 className='welcome'>Good to see you again <img src={hi}/></h1>
        <div className='login-box' id='login-screen'>
            <div>
               <p>Enter Your Email</p>
               <input 
               type='email' 
               placeholder='email' 
               onChange={(e)=>setEmail(e.target.value)}
               autoComplete="off"
               required/>
            </div>
            <div>
                <p>Enter Your Password</p>
                <input 
                type='password' 
                placeholder='password' 
                onChange={(e)=>setPassword(e.target.value)}
                autoComplete="new-password"
                required/>
            </div>

            {error && <p style={{color:"red"}}>{error}</p>}
            <button type='submit' from='login-screen' className='signIn-btn'>
               SignIn
            </button>
            <a href="/signup">Don't have an account</a>
        </div>
    </form>
   </div> 
  )
}

export default Login