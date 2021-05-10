import React, { useState, useContext } from 'react';
import FormContext from './context/createContext';

const Form2 = () => {
  const { formData, setFormData } = useContext(FormContext)
  const [form2data, setform2data] = useState({
    age: '',
    category: '',
    teammember: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(" My data: ", formData)
  }

  const handleChange = (e) => {
    setform2data({
      ...form2data,
      [e.target.name]: e.target.value
    })
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select onChange={handleChange} name="age" id="cars">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>

        <select onChange={handleChange} name="category" id="cars">
          <option value="Agriculture">Agriculture</option>
          <option value="IT">IT</option>
          <option value="Pharma">Pharma</option>
        </select>

        <select onChange={handleChange} name="teammember" id="cars">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form2;
