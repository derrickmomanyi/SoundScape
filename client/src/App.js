


import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Albums from "./components/Albums";
import Artists from "./components/Artists";

function App() {
  const [user, setUser] = useState(null);
  const [albums, setAlbums] = useState([])
  const [artists, setArtists] = useState([])
  const [search, setSearch] = useState("")

 
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

  useEffect(() => {
    fetch('/albums')
    .then(res => res.json())
    .then((albums) => setAlbums(albums))
  }, []);
  // console.log(albums);

  useEffect(() => {
    fetch(`/artists`)
    .then((r) => r.json())
    .then(artists => setArtists(artists))
  }, [])
  // console.log(artists);

  function handleSearch(e){
    setSearch(e.target.value)
  }


  const displayAlbums = albums.filter(album => album.title.toLowerCase().includes(search.toLowerCase()))
  const displayArtists = artists.filter(artist => artist.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
    <Navbar user = {user} setUser = {setUser}/>
    <Routes>
      <Route path = '/' element = { <Home  albums = {displayAlbums} handleSearch={handleSearch} search={search} />}/>
      <Route path = '/signup' element = { <Signup  setUser = {setUser} />} />      
      <Route path = '/login' element = {<Login setUser = {setUser}/>} />
      <Route path = '/albums' element = {<Albums user = {user} albums = {displayAlbums} handleSearch={handleSearch} search={search} />} />
      <Route path = '/artists' element = {<Artists user = {user} artists = {displayArtists} handleSearch={handleSearch} search={search} /> } />
          
     
    </Routes>
    </>
  );
}

export default App;