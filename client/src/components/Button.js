import React from 'react'

const Button = ({text, onclick}) => {
  return (
    <div>
        <button className='btn' onClick={onclick}><h3>{text}</h3></button>
    </div>
  )
}

export default Button