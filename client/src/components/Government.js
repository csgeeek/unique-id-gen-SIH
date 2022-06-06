import React , { useState, useEffect } from 'react'
import Item from './Item'
import User from './User'

const Government = () => {
const [show, setshow] = useState(false);
const [search, setSearch] = useState(''); 
const [show1, setshow1] = useState(false);
const [items, setItems] = useState([]);
const [items1, setItems1] = useState({
    regId: '',
    studentName: '',
    otherDetails: ''
});

useEffect(() => {
    const getStudents = async () => {
        const res = await fetch("http://localhost:5000/govt");
        const data = await res.json();
        console.log(data);
        setItems(data);
        setshow(true);
        return items;
    }
    getStudents()
}, []);


const change = (e) => {
    setSearch(e.target.value);
}

const handleChange = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/govt/${search}`);
    const data = await res.json();
    if(data.length > 0) {
        setshow1(true);
        setItems1({
            regId: data[0].regId,
            studentName: data[0].studentName,
            otherDetails: data[0].otherDetails
        });
    }
    else setshow1(false);
}
  console.log(items1);
  return (
    <div className="govt">
        <div className='government1'>
            <div className="government">
                <form onSubmit={handleChange}>
                    <input type="search" value={search} className='searchbar' onChange={change} placeholder="UNIQUE ID" required/>
                    <button type="submit"><img src="/images/search.png" alt="search" /></button>
                </form>
                {show?<Item items={items} click={change}/>:'Nothing to display'}
            </div>
        </div>
        {show1?<User id={items1.regId} studentName={items1.studentName} otherDetails={items1.otherDetails} />:''}
    </div>
  )
}

export default Government