import React, { useState } from 'react'
import './SignupAlert.css'
const SignupAlert = () => {
    const [open, setOpen] = useState(false);
  return (
    <div className='signup-alert-container'>
      <div className='closed'><h2>FLAT 500 OFF</h2></div>      
      <div className='open'><p>Hello user, please Signup......................................</p></div>      
    </div>
  )
}

export default SignupAlert
