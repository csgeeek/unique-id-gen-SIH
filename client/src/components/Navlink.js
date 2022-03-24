import React from 'react'

const Navlink = ({link, text}) => {
  return (
    <div>
        <div className='link'><a href={link}>{text}</a></div>
    </div>
  )
}

export default Navlink