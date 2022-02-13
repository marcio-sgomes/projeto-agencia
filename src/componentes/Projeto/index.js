import React from "react";
import './../../componentes/styles.css';

function Projeto(){
    return(
        <section class="projects-section bg-light" id="projects">
        <div class="container px-4 px-lg-5">
         
            <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                <div class="col-xl-8 col-lg-7"> <img src={require('./../../../src/assets/img/bg-masthead.jpg')} class="img-fluid mb-3 mb-lg-0" alt="..." /></div>
                <div class="col-xl-4 col-lg-5">
                    <div class="featured-text text-center text-lg-left">
                    <h4>Como faço para conferir essas lindas imagens?</h4>
                    <p class="text-black-50 mb-0">Basta navegar por nosso site e conferir.</p>
                    </div>
                </div>
            </div>
         
            <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                <div class="col-lg-6"><img src={require('./../../../src/assets/img/demo-image-01.jpg')} class="img-fluid"  alt="..." /></div>
                <div class="col-lg-6">
                    <div class="bg-black text-center h-100 project">
                        <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-left">
                            <h4 class="text-white">Você gosta de montanhas?</h4>
                            <p class="mb-0 text-white-50">estudo diz que isso revela sua personalidade.
                            Montanhas trazem paz e enrriquece a alma com tranquilidade e leveza.
                            </p>
                                <hr class="d-none d-lg-block mb-0 ms-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
            <div class="row gx-0 justify-content-center">
                <div class="col-lg-6">< img src={require('./../../../src/assets/img/demo-image-02.jpg')}class="img-fluid"alt="..." /></div>
                <div class="col-lg-6 order-lg-first">
                    <div class="bg-black text-center h-100 project">
                        <div class="d-flex h-100">
                            <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-white">Montanhas enrriquece o espirito</h4>
                                    <p class="mb-0 text-white-50">O mais intrigante foi que outros estudos mostraram se certos lugares poderiam ou não,
    geograficamente, nutrir ou exacerbar os tipos de personalidade. Uma pesquisa identificou que os espaços abertos
    incentivam o comportamento de pessoas extrovertidas. </p>                                <hr class="d-none d-lg-block mb-0 me-0" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="signup-section" id="signup">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5">
                    <div class="col-md-10 col-lg-8 mx-auto text-center">
                        <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
                        <h2 class="text-white mb-5">Inscreva-se para receber atualizações!</h2>
                 
                        <form class="form-signup" id="contactForm" data-sb-form-api-token="API_TOKEN">
                         
                            <div class="row input-group-newsletter">
                                <div class="col"><input class="form-control" id="emailAddress" type="email" placeholder="Endereço de Email..." aria-label=" Endereço de Email..." data-sb-validations="required,email" /></div>
                            </div>
                            <div class="invalid-feedback mt-2" data-sb-feedback="emailAddress:required">Insira um Email valido.</div>
                            <div class="invalid-feedback mt-2" data-sb-feedback="emailAddress:email">Email não é valido.</div>
                          
                            <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3 mt-2 text-white">
                                <div class="fw-bolder">Envio de formulário bem-sucedido!!</div>
                                   Para ativar este formulário clique
                                    <br />
                                    <a href="index.html">aqui e cadastre-se</a>
                                </div>
                            </div>
                        
                            <a href="index.html">aqui e cadastre-se</a>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </section> 
    
    )
}

export default Projeto;