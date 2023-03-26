import { useEffect, useState} from 'react';
import MyAlbumPage from './MyAlbumPage';

const MyAlbums = ( { user } ) => {

const [userAlbums, setUserAlbums] = useState([])



  useEffect(() => {
      fetch(`/users/${user.id}`)
      .then(res => res.json())
      .then(user => setUserAlbums(user.user_albums))
  }, [])

  function onDeleteUserAlbum(id) {
    const deleted = userAlbums.filter(userAlbum => userAlbum
    .id !== id)
    setUserAlbums(deleted) 
  }    

  return (
    <div className="all_artists_body">
      <h1>My Albums</h1>
        <div className="albums_container">
          {userAlbums.map(userAlbum => <MyAlbumPage key = {userAlbum.id} userAlbum={userAlbum} onDeleteUserAlbum={onDeleteUserAlbum}/>)}
        </div>
    </div>
  );
};

export default MyAlbums;