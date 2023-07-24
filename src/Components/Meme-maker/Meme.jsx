import React from "react";
import { useState, useEffect } from "react";
// import { data } from "https://api.imgflip.com/get_memes";

// API URL : https://api.imgflip.com/get_memes

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomMeme: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomMeme: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  return (
    <main>
      <div className="meme-input-field">
        <input
          type="text"
          placeholder="Top Text"
          className="meme-text-input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          className="meme-text-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="new-img-btn" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="meme--container">
        <div className="meme--output">
          <img src={meme.randomMeme} className="meme--image" alt="" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  );
}
