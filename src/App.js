import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/Components/home';
import Login from '../src/Components/login';
import Copyright from './Components/copyright';
import './App.css';
import { useEffect, useState } from 'react';


const App = () => {
  

  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")


  return (
    <div className='app-container'>

   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
        </Routes>
    </BrowserRouter>
    <Copyright />

    </div>

  );
}

export default App;






















/*

<FontAwesomeIcon icon="fa-solid fa-j" />

   const name = "React";

  const facts = { date: "May 2013", language: 'JavaScript', license: 'MIT'}

  const aboutReact = (info) => {
    return (`Release Date: ${info.date}. Language: ${info.language}. License: ${info.license}. `);
  }
  
  return (
  <div className="container">
    <img src={logo} alt='React-logo' />
    <h1>{name}</h1>
    <p>{aboutReact(facts)}</p>
  </div>)

*/
