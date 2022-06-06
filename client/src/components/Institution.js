import React, { useState } from 'react'
import axios from 'axios';
import Success from './Success'

const Institution = () => {

const [show, setShow] = useState(false);

const [id, setID] = useState('');

const [input, setInput] = useState({
    unqid : '',
    regid : '',
    name : '',
    college : '',
    email : '',
    phone : ''
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

const handleClick1 = (e) => {
    e.preventDefault();
    let unique_id = "";
    for(let i=1; i>=0; i--) unique_id+=input.regid[input.regid.length-i-1].toUpperCase();
    for(let i=1; i<input.phone.length; i+=2) unique_id += input.phone[i];
    for(let i=0; i<input.phone.length; i+=2) unique_id += input.phone[i];
    handleClick(unique_id);
}

const handleClick = (unique_id) => {

    const newItem = {
        unqid : unique_id,
        regid : input.regid,
        studentName : input.studentName,
        email : input.email,
        phone : input.phone
    }

    async function postData(url = '', data = {}) {

        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }
    
    postData('http://localhost:5000/institution', newItem)
        .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
    });
    
    setID(unique_id);
    setShow(true);
}  

  return (
    <div className="container2">
        {show? <Success id = {id}/> : 
            <form onSubmit={handleClick1} className='iform' autoComplete="off">
                <h2>NEW REGISTRATION</h2>
                <div className="input">
                    <label htmlFor="1">Reg Id</label>
                    <input value={input.regid} type="text" name="regid" id="regid" required placeholder="registration id" onChange={handleChange}/> <br />
                    <label htmlFor="2">Name</label>
                    <input value={input.name} type="text" name="name" id="name" required placeholder="Full name" onChange={handleChange}/> <br />
                    <label value={input.email} htmlFor="3">Email</label>
                    <input type="email" name="email" id="email" required placeholder="example@gmail.com" onChange={handleChange}/> <br />
                    <label value={input.phone} htmlFor="3">phone</label>
                    <input type="text" name="phone" id="phone" required placeholder="9876XXXXXX" onChange={handleChange}/> <br />
                </div>
                <button className='btn-cls' type="submit">Register</button>
            </form>
        }
        
    </div>
  )
}

export default Institution