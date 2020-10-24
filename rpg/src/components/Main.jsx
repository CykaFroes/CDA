import React, { useState, useEffect } from "react";

const Main = () => {
  function fadeOut(id, time) {
    fade(id, time, 100, 0);
  }

  function fadeIn(id, time) {
    fade(id, time, 0, 100);
  }

  function fade(id, time, ini, fin) {
    var target = document.getElementById(id);
    var alpha = ini;
    var inc;
    if (fin >= ini) {
      inc = 2;
    } else {
      inc = -2;
    }
    var timer = (time * 1000) / 50;
    var i = setInterval(function () {
      if ((inc > 0 && alpha >= fin) || (inc < 0 && alpha <= fin)) {
        clearInterval(i);
      }
      setAlpha(target, alpha);
      alpha += inc;
    }, timer);
  }

  function setAlpha(target, alpha) {
    target.style.filter = "alpha(opacity=" + alpha + ")";
    target.style.opacity = alpha / 100;
  }

  setTimeout(function () {
    fadeIn("letterC", 2);
  }, 8000);

  setTimeout(function () {
    fadeIn("dot1", 2);
  }, 8500);

  setTimeout(function () {
    fadeIn("letterD", 2);
  }, 10000);

  setTimeout(function () {
    fadeIn("dot2", 2);
  }, 10500);

  setTimeout(function () {
    fadeIn("letterA", 2);
  }, 12000);

  setTimeout(function () {
    fadeIn("soon", 2);
  }, 13000);

  return (
    <div className="main">
      <div className="container mx-auto flex justify-center h-screen">
        <div className="flex justify-center items-center flex-col">
          <h1 className="mainTitle text-3xl " id="teste">
            <span className="font-medieval cda-font-extreme text-white opacity-0" id="letterC">C</span>
            <span className="font-medieval cda-font-extreme text-black opacity-0" id="dot1">.</span>
            <span className="font-medieval cda-font-extreme text-black opacity-0" id="letterD">D</span>
            <span className="font-medieval cda-font-extreme text-white opacity-0" id="dot2">.</span>
            <span className="font-medieval cda-font-extreme text-white opacity-0" id="letterA">A</span>
          </h1>
          <p className="text-black  text-2xl lg:text-6xl md:text-4xl font-grenze opacity-0" id="soon">Em breve...</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
