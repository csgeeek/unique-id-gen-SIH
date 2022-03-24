import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Institution = () => {

let navigate = useNavigate();

const [input, setInput] = useState({
    regId:'',
    studentName:'',
    otherDetails:''
})  

const handleChange = (e) => {
    const {name, value} = e.target;
    setInput(prevInput => {
        return {
        ...prevInput,
        [name]:value
        }
    })
}

const handleClick = (e) => {
    e.preventDefault();
    const newItem = {
        regId : input.regId,
        studentName : input.studentName,
        otherDetails : input.otherDetails
    }

    axios.post('https://localhost:5000', newItem);
    navigate('/');
}  

  return (
    <div className="container2">
        <form onSubmit={handleClick} className='iform'>
            <h2>REGISTER HERE</h2>
            <div className="input">
                <label htmlFor="1">Reg Id</label>
                <input value={input.regId} type="text" name="regId" id="regId" placeholder="regId" onChange={handleChange}/> <br />
                <label htmlFor="2">Name</label>
                <input value={input.studentName} type="text" name="studentName" id="studentName" placeholder="studentName" onChange={handleChange}/> <br />
                <label value={input.otherDetails} htmlFor="3">Other</label>
                <input type="text" name="otherDetails" id="otherDetails" placeholder="otherDetails" onChange={handleChange}/> <br />
            </div>
            <button className='btn btn-cls' type="submit">Register</button>
        </form>
    </div>
  )
}

export default Institution