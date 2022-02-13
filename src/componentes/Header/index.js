import React from "react";
import './../../componentes/styles.css';
import './style.css';
function Header(){
    return(
        <header class="masthead">
        <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
            <div class="d-flex justify-content-center">
                <div class="text-center">
                    <h1 class="mx-auto my-0 text-uppercase">Mountain</h1>
                    <h2 class="text-white-50 mx-auto mt-2 mb-5">Viagem sobre as montanhas mais épica da sua vida.</h2>
                    <a class="btn btn-primary" href="#about">Iniciar</a>
                </div>
            </div>
        </div>
    </header>
    ) 
}

export default Header;