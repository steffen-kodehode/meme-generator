import React from "react";
import { useState, useEffect } from "react";
// import { data } from "https://api.imgflip.com/get_memes";

// import Image from "../Meme-Output/Images/imgfour.jpeg";

// API URL : https://api.imgflip.com/get_memes

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomMeme: "http://i.imgflip.com/1bij.jpg",
  });

  function getMemeImage() {
    const memesArray = data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMeme(memesArray[randomNumber].url);
  }

  useEffect(
    {
      fetch /*api url/data*/,
    },
    []
  );

  return (
    <div className="meme-input-field">
      <div>
        <input
          type="text"
          placeholder="Top Text"
          className="meme-text-input"
          name="topText"
        />
        <input
          type="text"
          placeholder="Bottom Text"
          className="meme-text-input"
          name="bottomText"
        />
        <button className="new-img-btn" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="meme--output">
        <img src={meme.randomMeme} className="meme--image" alt="" />
        <h1 className="meme--text" id="text-top">
          This is some text
        </h1>
        <h1 className="meme--text" id="text-bottom">
          this is bottom text
        </h1>
      </div>
    </div>
  );
}
