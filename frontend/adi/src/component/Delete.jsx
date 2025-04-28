import axios from 'axios';
import React from 'react'

function Delete() {
    const adi=async(e)=>{
        e.preventDefault
        const id=e.target.id.value;
        await axios.delete(`https://studentapp1-w12l.onrender.com/${id}`)
        alert("data delete")
    }
  return (
    <div style={{border:'2px solid red', padding:'10px'}}>
        <h1 style={{color:'red'}}>Delete Data</h1>
        <form onSubmit={adi}>
            <input type="text" name="id" placeholder='enter id' />
            <button type='submit'>Delete Data</button>
        </form>
    </div>
  )
}

export default Delete