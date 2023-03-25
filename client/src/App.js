


import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

function App() {
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetch('/me')
  //   .then((res) => {
  //     if (res.ok) {
  //       res.json().then((user) => setUser(user));
  //     }
  //   })
  // })
  useEffect(() => {
    fetch('/me')
    .then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
        });
      } else {
        res.json().then( (json) => {
          if (json.errors !== undefined) {
            alert(json.errors);
          }
        });
      }
    })
  },[]);

  return (
    <>
    <Navbar user = {user} setUser = {setUser}/>
    <Routes>
      <Route path = '/' element = { <Home user = {user} setUser = {setUser}/>}/>
      <Route path = '/signup' element = { <Signup  setUser = {setUser} />} />      
      <Route path = '/login' element = {<Login setUser = {setUser}/>} />
          
     
    </Routes>
    </>
  );
}

export default App;