import React, { useState,useEffect } from 'react'
import axios from 'axios'
const View = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        viewdata();
    },[])
    const viewdata = async ()=>{
        const res=await axios.get('https://studentapp1-w12l.onrender.com/users');
        console.log(res);
        setUsers(res.data);
    }

  return (
    <div style={{border:'2px solid red', padding:'20px' }}>
        <h1 style={{color:'red'}}>Show Data</h1>
        <table style={{border: '2px solid red',backgroundColor: 'greenyellow',width: '100%'}}>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
            </tr>
            {users.map((user) => (
                <tr key={user.id}>
                    <th>{user.id}</th>
                    <th>{user.name}</th>
                    <th>{user.age}</th>
                </tr>
            ))}
        </table>
     </div>
  )
}

export default View
