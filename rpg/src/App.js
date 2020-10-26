import React, { useState, useEffect } from 'react';

import "./assets/css/global.css";
import Main from "./components/Main.jsx";

function App() {
  let background = document.querySelector(".bg");





  useEffect(() => {
    console.log('dom alterada');
  });
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App
