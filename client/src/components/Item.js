import React from 'react'

const Item = ({items, click}) => {
  return (
    <div className='items'>
        {items.map((item, index) => {
            return <button value={item.regId} key={index} onClick={click}>{item.regId}</button>
        })}
    </div>
  )
}

export default Item