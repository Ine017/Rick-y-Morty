import React, { useState } from 'react'
import validation from './Validation';

export default function Form(props) {
  
    const [userData, setUserData] = useState({
        username: '', 
        password: '' 
       });
    const [errors, setErrors] = useState({
        username: '', 
        password: ''
    });
    
    function handleChange(e) {
        setUserData({...userData,
         [e.target.name] : e.target.value
        })
        setErrors(validation({...userData,
            [e.target.name] : e.target.value
           }))
    }
    const handleSubmit = (e) => {
      e.preventDefault()
      if(Object.entries(errors).length < 0)
    {
      alert("Debes completos");
      setErrors(validation({
        username: '', 
        password: ''
      }
      ))
    }
    else{
      
      props.login(userData); 
      setUserData({
        username: "",
        password: ""
      });
      setErrors({
        username: "",
        password: ""
      });
      
    }
    }

    return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username:</label>
           <input 
             id='username'
             type="text"
             name='username'
             placeholder='Ingrese el usuario...'
             onChange={handleChange}
             value={userData.username}
              />
        <p>{errors.username}</p>
        <label>Password:</label>
           <input 
             id='password'
             type="password"
             name='password'
             onChange={handleChange}
             value={userData.password}
              />
        <p>{errors.password}</p>
        <input type='submit' value='LOGIN'/>
      </form>
    </div>
    )
  }

