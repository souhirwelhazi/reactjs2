import React from 'react';
import './style.css';
import imageInSrc from './imageInSrc.jpg';
import video from './myVideo.mp4';


function App() {
  return (
    <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>
      <h1 className="title red">Your name here</h1>
      <br />
      <div className="imageContainer">
        <img src={imageInSrc} alt="Image in src" />
        <img src="/imageInPublic.jpg" alt="Image in public" />
      </div>
      <br />
      <video width="320" height="240" controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;

