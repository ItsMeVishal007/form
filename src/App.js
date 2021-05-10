import React, { useState } from 'react';
import createContext from './context/createContext';
import { Route } from 'react-router-dom';
import './App.css';
import Form2 from './Form2';
import Form1 from './Form1';

function App() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    age: '',
    category: '',
    teammember: ''
  });
  return (
    <createContext.Provider value={{ formData, setFormData }}>
      <div className="App">
        <Route exact path='/form1' component={Form1} />
        <Route exact path='/form2' component={Form2} />
      </div>
    </createContext.Provider>
  );
}

export default App;
