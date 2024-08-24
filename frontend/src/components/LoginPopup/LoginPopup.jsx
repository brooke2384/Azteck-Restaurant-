import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Sign Up")


  return (
    <div className='login-popup'>
        <form className="login-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-input">
                <input type='text' placeholder='Your Name' required/>
                <input type='email' placeholder='Your Email' required/>
                <input type='password' placeholder='Password' required/>


            </div>
        </form>
    </div>
  )
}

export default LoginPopup