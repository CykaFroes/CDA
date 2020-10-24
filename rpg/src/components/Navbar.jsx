import React, { useState, useEffect } from 'react';




const Navbar = () => {

    useEffect(() => {
        let clickBtn = document.querySelectorAll('.click-bg');
        let bg = document.querySelectorAll('.bg');

        for (let btns of clickBtn) {
            btns.addEventListener("click", function (){
                console.log('clicado');
                for (let backgrounds of bg) {
                    backgrounds.classList.remove('hidden');   
                }
            })      
        }
    })
    return (
        <div className="navbar">
            <div className="container mx-auto flex justify-center">
                <ul className="nav-items flex">
                    <li className="nav-item font-roboto mr-2 click-bg">Sobre</li>
                    <li className="nav-item font-roboto mr-2 click-bg">Membros</li>
                    <li className="nav-item font-roboto click-bg">Contato</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;