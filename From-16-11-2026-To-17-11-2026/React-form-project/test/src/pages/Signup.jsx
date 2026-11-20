import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../signup.css'
import hi from'../assets/hi.png'

export default function Signup() {

    const USER_NAME='admin'
    const USER_EMAIL='admin@gmail.com'
    const USER_PASSWORD = 'admin@123'  
    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('') 

    const navigate = useNavigate()

    const handleSignup =(e)=>{
         
        e.preventDefault()
        if(USER_NAME==username && USER_EMAIL==email && USER_PASSWORD==password)
        {
           setError('')
           navigate('/')
        }
        else{
            setError('User not allowed')
        }
    }

  return (

    <div className='test'>
        <form onSubmit={handleSignup} autoComplete="off" className='login-mod'>
            <h3>Sign Up</h3>
            <h1 className='welcome'>Good to see you again <img src={hi}/></h1>
            <div className='login-box' id='login-screen'>
                <div>
                   <p>Enter Username</p>
                   <input 
                   type='text' 
                   placeholder='username' 
                   onChange={(e)=>setUsername(e.target.value)}
                   autoComplete="off"
                   required/>
                </div>
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
                   SignUp
                </button>
                <a href="/">Already Login</a>
            </div>
        </form>
       </div> 
  )
}
