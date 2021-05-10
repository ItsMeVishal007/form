import React, { useState, useContext } from 'react'
import FormContext from './context/createContext';

const Form1 = ({history}) => {
  const { formData, setFormData } = useContext(FormContext)
  const [form1data, setform1data] = useState({
    firstname: '',
    lastname: '',
    email: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/form2')
  }
  const handleChange = (e) => {
    setform1data({
      ...form1data,
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
        <input placeholder="First Name" name="firstname" onChange={handleChange} />
        <input placeholder="Last Name" name="lastname" onChange={handleChange} />
        <input placeholder="Email" name="email" onChange={handleChange} />
        <button type="submit">Next</button>
      </form>
    </div>
  )
}

export default Form1;
