import React from 'react'

const User = ({id, studentName, otherDetails}) => {
  return (
    <div className='details'>
        Unique Id : <span>{id}</span> <br />
        studentName : <span>{studentName}</span> <br />
        otherDetails : <span>{otherDetails}</span> <br />
    </div>
  )
}

export default User