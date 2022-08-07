
import React from "react";
import foto from '../images/messi.jpg'
import '../index.css'

function Header (){
    return (
      <header>
        <img  className="foto" src={foto} alt="imaginea lispeste"></img>
        <div className="--container">
            <div className="details">
                <h1>Erhan Ion</h1>
                <p>Student, Frontend Developer</p>
                <a href="https://ion901.github.io/Tourism-website.github.io/"><small>https://ion901.github.io/Tourism-website.github.io/</small></a>
            </div>
            <div className="buttons">
                <button className="--btn1"><i class="fa-solid fa-envelope"></i>&nbsp;&nbsp;Email</button>
                <button className="--btn2"><i class="fa-brands fa-linkedin"></i>&nbsp;&nbsp;Linkedin</button>
            </div>
        </div>
      </header>  
    )
}

export default Header;