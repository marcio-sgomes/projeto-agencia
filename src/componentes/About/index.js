import React from "react";
import './../../componentes/styles.css';

function About(){
    return(
        <section class="about-section text-center" id="about">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-lg-8">
                    <h2 class="text-white mb-4">Navegue por qualquer plataforma</h2>
                    <p class="text-white-50">
                        Aqui você pode navegar a vontade por até um relógio. Tudo para você não ficar fora dessas montanhas maravilhosas.                    </p>
                </div>
            </div>
            <img src={require('./../../../src/assets/img/ipad.png')}class="img-fluid" alt="..." />
        </div>
    </section>
    )
}

export default About;