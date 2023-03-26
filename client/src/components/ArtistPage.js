import { useState } from "react";
import { NavLink } from "react-router-dom";
import '../css/ArtistPage.css'

const ArtistPage = ( { artist, user } ) => {

  // const [liked, setLiked] = useState(false)

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }


  const formData = {
    user_id: user ? user.id : 1,
    artist_id: artist.id
  }

  // function handleAddArtist() {
  //   fetch(`/user_artists`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //     },
  //     body: JSON.stringify(formData)
  //   })
  //   setLiked(true)
  // }

  // let destructuredIds  

//   user ? destructuredIds = user.user_artists.map(userArtist => userArtist.artist).map(userArtist => userArtist.id) : destructuredIds = []


  return (
    <div className="artist_thumbnail_container">
        <img 
            key={artist.id} 
            src={artist.image} 
            alt={artist.name}
            className="artist_thumbnail_image"/>
      
      <div className="artist_thumbnail_info">
      
      <div className="column_one">
         <NavLink to={`/artists/${artist.id}`}>
          <h3>{truncate(artist.name, 16)}</h3>
        </NavLink>
      </div>
      
      <div className="column_two_artist">

        {/* {user ? 
            
            destructuredIds.indexOf(artist.id) !== -1 || liked ? <i class="fa-solid fa-heart albumheart liked" onClick={handleAddArtist}><svg style = {{color: 'red'}}xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
          </svg></i> : <i class="fa-solid fa-heart albumheart" onClick={handleAddArtist}></i> 

            :

            null
        
          } */}

      </div>
    
      </div>
  </div>
  );
};

export default ArtistPage;