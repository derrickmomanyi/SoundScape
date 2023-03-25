import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import '../css/AlbumPage.css'

function AlbumPage({ album, user}){
    const {id, image, title} = album
    
  const [liked, setLiked] = useState(false)
  const [userAlbums, setUserAlbums] = useState([])

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const likedAlbum = {
    user_id: user ? user.id : 1, album_id: album.id
  }

  function handleAddAlbum() {
    fetch('/user_albums', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(likedAlbum)
    })
    setLiked(true)
  }


  let destructuredIds;  

//   user ? destructuredIds = user.user_albums.map(userAlbum => userAlbum.album).map(userAlbum => userAlbum.id) : destructuredIds = []


    return(
        <div className="albumpage_container">

        <NavLink  to={`/albums/${album.id}`}>
          <img 
                key={id} 
                src={image} 
                alt={title}
                className="albumpage_image"/>
        </NavLink>
  
        <div className="albumpage_info">
  
          <div className="column_one">
            <NavLink  to={`/albums/${album.id}`}>
              <h3>{truncate(album.title, 14)}</h3>
            </NavLink>
              
          </div>
  
          <div className="column_two">
  
            {/* {user ? 
            
              destructuredIds.indexOf(id) !== -1 || liked ? <i class="fa-solid fa-heart albumheart liked" onClick={handleAddAlbum}></i> : <i class="fa-solid fa-heart albumheart" onClick={handleAddAlbum}></i> 
  
              :
  
              null
          
            } */}
  
          </div>
  
        </div>
    </div>
    
    )
}

export default AlbumPage;