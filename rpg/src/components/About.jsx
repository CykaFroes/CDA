import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';




const About = () => {
    useEffect(() =>{
        const body = document.querySelector('body')
        body.style.background = "#fff";
    })
    return (
        <div className="about">
            <FadeIn transitionDuration={3000}>
                <h2>Sobre o CDA</h2>
                <Link to="/">Voltar</Link>
            </FadeIn>
        </div>
    )
}


export default About;