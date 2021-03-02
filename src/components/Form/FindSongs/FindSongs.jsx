import React from "react";
import './FindShons.css';
const FindSongs = (props) => {
  const { title, artist, md5_image, type, preview } = props.song;
  
  return (
    <div className='songs-gallery'>
      <h2>{title}</h2>
      <h4>Artist : {artist.name}</h4>
      <audio src={preview} controls></audio>
    </div>
  );
};

export default FindSongs;
