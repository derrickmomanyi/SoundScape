import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';

import '../css/Navbar.css'

function Navbar({ user, setUser}){

    const navigate = useNavigate();
    function handleLogout(){
        fetch('/logout', {
            method: 'DELETE'
          })
          .then((res) => {
            if (res.ok) {
              setUser(false);
              navigate(`/login`); 
              
            }
          });
    }
    return(
        <div className="sidebar">
            <nav  className='nav-menu-items'>
            { user ? <span className="my_collection">{"Hey, "  +  user.username.toUpperCase()}</span> : ""}

            { user ?
            <NavLink to='/logout' onClick={ handleLogout }>
            <p><span>Logout</span></p>
            </NavLink>
            :
            <NavLink to='/login'>
                <p><span>Login</span></p>
            </NavLink>
            }

            { user ? null :
            <NavLink to='/signup'>
                <p><span>Signup</span></p>
            </NavLink>
            }

            <NavLink to='/'>
            <p><span>Home</span></p>
            </NavLink>

            <NavLink to='/albums'>
            <p><span>Albums</span></p>
            </NavLink>

            <NavLink to='/artists'>
            <p><span>Artists</span></p>
            </NavLink>

            <span className="line"></span>
            { user ? 
            <div>
              <div className="my_collection">                
                <span>MY PLAYLISTS</span>
              </div>
              
              <NavLink to='/myartists'>
                <p><span>My Artists</span></p>
              </NavLink>

              <NavLink to='/mysongs'>
                <p><span>My Songs</span></p>
              </NavLink>

              <NavLink to='/myalbums'>
                <p><span>My Albums</span></p>
              </NavLink>
            </div> : ""
            }
            </nav>
        </div>
    )
}

export default Navbar;