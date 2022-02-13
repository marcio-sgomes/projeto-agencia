import React from "react";
import './../../componentes/styles.css';
import './../Nav/style.css';
function Nav(){
return(
    
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    
    <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="#page-top">Agência Mountain</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="#about">Inicio</a></li>
                <li class="nav-item"><a class="nav-link" href="#projects">Projeto</a></li>
                <li class="nav-item"><a class="nav-link" href="#signup">Contato</a></li>
            </ul>
        </div>
    </div>
    
</nav>
)
}

export default Nav;