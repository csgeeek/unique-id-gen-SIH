import React from 'react'
import Button from './Button'

const Left = ({onclick1, onclick2, text1, text2}) => {
  return (
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia error officiis eum quae distinctio velit minima deserunt a ea. Laborum atque dolores quisquam, suscipit harum nostrum accusamus quam ipsa at vero in laudantium ipsum eveniet officiis perspiciatis asperiores nisi quos, dolore doloremque, nobis veritatis molestias! Consequuntur amet blanditiis odio pariatur iste expedita quos cumque animi ipsa hic facere dolor exercitationem alias doloribus, praesentium minus molestiae cum ut omnis numquam.</p>
        <br />
        <h4>Login as</h4>
        <div className="loginas">
            <Button text={text1} onclick={onclick1}/>
            <Button text={text2} onclick={onclick2}/>
        </div>
    </div>
  )
}

export default Left