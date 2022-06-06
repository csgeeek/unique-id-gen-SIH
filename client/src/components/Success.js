import React from 'react'

const Success = ({id}) => {
  return (
    <div className='success'>
        <h3><span>Registration Successful !!</span> <br /> UNIQUE ID : <span id="id">{id}</span></h3>
        click <a href="http://localhost:3000/inst">here</a> to register again!
    </div>
  )
}

export default Success