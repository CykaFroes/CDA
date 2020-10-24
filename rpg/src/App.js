import React, { useState, useEffect } from 'react';

import "./assets/css/global.css";
import Main from "./components/Main.jsx";

function App() {
  let background = document.querySelector(".bg");

  const animEnd = () => {
    console.log("terminou a primeira animação");
    background.classList.add('-z-10')
    background.classList.remove('z-0')
  };


  


  useEffect(() => {
    background.addEventListener("webkitAnimationEnd", animEnd);
    console.log('dom alterada');
  });
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
