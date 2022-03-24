import React from 'react'

const Title = ({text, img}) => {
  return (
    <div className='head'>
        <img className='logo' src={img} alt="logo" />
        <h1>{text}</h1>
    </div>
  )
}

export default Title