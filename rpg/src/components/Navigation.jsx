import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';


const Navigation = () => {
    return (
        <div className="navigate flex justify-center">
            <FadeIn transitionDuration={13000} className="flex">
                <Link to="/sobre" className="mr-4 font-grenze text-3xl link-btn">Sobre Nós</Link>
                <Link to="/sobre" className="mr-4 font-grenze text-3xl link-btn">Sobre Nós</Link>
                <Link to="/sobre" className="mr-4 font-grenze text-3xl link-btn">Sobre Nós</Link>
                <Link to="/sobre" className="mr-4 font-grenze text-3xl link-btn">Sobre Nós</Link>
            </FadeIn>
        </div>
    )
}


export default Navigation