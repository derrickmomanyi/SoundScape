


import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/me')
    .then((res) => {
      if (res.ok) {
        res.json().then((user) => setUser(user));
      }
    })
  })

  return (
    <>
    <Navbar user = {user} setUser = {setUser}/>
    <Routes>
      <Route path = '/signup' element = { <Signup  setUser = {setUser} />} />      
      <Route path = '/login' element = {<Login setUser = {setUser}/>} />
          
     
    </Routes>
    </>
  );
}

export default App;