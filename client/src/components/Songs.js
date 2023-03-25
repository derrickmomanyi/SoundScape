// import YouTube from 'react-youtube'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "../css/Songs.css";

const Song = ( { song, artist, user } ) => {

    // const [videoUrl, setVideoUrl] = useState("")
    // const [liked, setLiked] = useState(false)

    // const opts = {
    //     height: '350',
    //     width: '50%',
    //     playerVars: {
    //         // https://developers.google.com/youtube/player_parameters
    //         autoplay: 1,
    //     },
    // };

    // function handleClick(song){
    //     let videoId
    //     song.music_video.startsWith("https://youtu.be") ? videoId = song.music_video.slice(17, 28) : videoId = song.music_video.slice(32, 43)
        
    //     if (videoUrl) {
    //         setVideoUrl('')
    //     } else {
    //         setVideoUrl(videoId)
    //         }
    // }

    // const formData = {
    //     user_id: user ? user.id : 1,
    //     song_id: song.id
    //   }
    
    //   function handleAddSong() {
    //     fetch('/user_songs', {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json",
    //       },
    //       body: JSON.stringify(formData)
    //     })
    //     setLiked(true)
    //   }

    //   let destructuredIds  

    //   user ? destructuredIds = user.user_songs.map(userSong => userSong.song).map(userSong => userSong.id) : destructuredIds = []
    

    return (
        <div className="songRow">
          <div className="songRow__info">

            <NavLink to={`/songs/${song.id}`}>
                <h1>{song.title}</h1>
            </NavLink>

            {/* <i className="fa-solid fa-play" onClick={() => handleClick(song)}></i> */}

            {/* {user ? 
          
            destructuredIds.indexOf(song.id) !== -1 || liked ? <i class="fa-solid fa-heart albumheart liked" onClick={handleAddSong}></i> : <i class="fa-solid fa-heart albumheart" onClick={handleAddSong}></i> 

            :

            null
          
            } */}

            
            {/* {videoUrl && <YouTube videoId={videoUrl} opts={opts} className="music_video"/>} */}

            <NavLink to={`/artists/${artist.id}`}>
                <p>{artist.name}</p>
            </NavLink>
  

          </div>
        </div>
      );
  };
  
  export default Song;