// src/App.jsx

import { useState } from 'react';
import './App.css'

const App = () => {

  const [title, setTitle] = useState('The full name will appear here.');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: ""
  })

  const handleInput = (event) => {
    setFormData({...formData, [event.target.name] : event.target.value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setTitle(`Your name is: ${formData.firstName} ${formData.lastName}`);
    setFormData({firstName: "", lastName: ""});
  }

  return (
    <>
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name: </label>
        <input type='text'
          id="firstName" 
          name="firstName" 
          value={formData.firstName}
          onChange={handleInput} />

        <label htmlFor="lastName">Last Name: </label>
        <input type='text'
          id="lastName" 
          name="lastName" 
          value={formData.lastName}
          onChange={handleInput} />
          <hr />
          <button>Submit</button>
      </form>
    </>
  );

  
};

export default App;