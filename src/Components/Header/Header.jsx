import React from "react";
import TrollFace from "../Header/Images/Troll-Face.png";

export default function Header() {
  return (
    <div className="Header">
      <img className="Header--logo" src={TrollFace} alt="troll-face" />
      <h1 className="Header--title">Meme Generator</h1>
    </div>
  );
}
