import React from 'react'
import axios from 'axios'
const Register = () => {
    const handleregister =async (e) =>{
        e.preventDefault()
        const user = {
            name: e.target.name.value,
            age: e.target.age.value
        }
        await axios.post('https://studentapp1-w12l.onrender.com/users', user)
       alert('User Registered Successfully')

    }
  return (
    <div style={{border:'2px solid red', padding:'10px'}}>
      <h1 style={{color:'red'}}>Resister User</h1>
      <form onSubmit={handleregister}>
        <label>Name:</label> <input type='text' name='name' />
        <label>Age:</label> <input type='text' name='age' />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}
export default Register
