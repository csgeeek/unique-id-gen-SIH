import React from 'react'
import Button from './Button'

const Left = ({onclick1, onclick2, text1, text2}) => {
  return (
    <div>
        <p>Our website helps central and state governments to uniquely identify each student who are from diverse educational backgrounds, making the time-consuming process of college tracking and allotment of grants and fellowships easier</p>
        <br />
        <h4>Login as</h4>
        <div className="loginas">
            <Button text={text1} onclick={onclick1} img="/images/govt.jpeg"/>
            <Button text={text2} onclick={onclick2} img="/images/university.jpeg"/>
        </div>
    </div>
  )
}

export default Left