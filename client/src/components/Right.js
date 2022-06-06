import React from 'react'
import { useNavigate } from "react-router-dom";

const Right = ({text, value}) => {
  let navigate = useNavigate();

  const click1 = () => {
      navigate('/inst')
  }
  
  const click2 = () => {
      navigate('/govt')
  }

  return (
    <div className='form'>
        <div className="login-image">
            <h2>{text}</h2>
        </div>
        <div className="login">
            <form action="">
                <div className="username">
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder="Enter username"/>
                    <br />
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder="Enter password"/>
                    <br />
                    <button type="submit" onClick={value==="1"?click1:click2} className='submit-btn'>Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Right