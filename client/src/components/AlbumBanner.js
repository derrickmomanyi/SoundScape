import React, { useState, useEffect } from 'react'
import "../css/AlbumBanner.css";

const AlbumBanner = ( { album, artist }) => {

  const { title, year, image, genre, label, rating } = album




  return (
    
    <header className="banner"
           style={{backgroundImage: `url("${image}")`}}
      >
        <div className="artist_name">
            <h1 style={{transform: "translate(0%, 270%)", marginLeft: "20px"}}>{title}</h1>
        </div>

        <div className="banner--fadeBottom" />
    </header>
    
    
  )
};

export default AlbumBanner;