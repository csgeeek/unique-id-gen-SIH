import React from 'react'

const Button = ({text, onclick, img}) => {
  return (
    <div>
        <button className='btn' onClick={onclick}>
          <h3>{text}</h3>
          <img className="simha" src={img} alt="img"/>
        </button>
    </div>
  )
}

export default Button