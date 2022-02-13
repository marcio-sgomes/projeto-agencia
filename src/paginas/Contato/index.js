import React from "react";
import './../../componentes/styles.css';
function Contato(){
    return(
        <section class="contact-section bg-black">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5">
                <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card py-4 h-100">
                        <div class="card-body text-center">
                            <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                            <h4 class="text-uppercase m-0">Endereço</h4>
                            <hr class="my-4 mx-auto" />
                            <div class="small text-black-50">Rua Rio D'Una 205, Rio de Janeiro, BR</div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card py-4 h-100">
                        <div class="card-body text-center">
                            <i class="fas fa-envelope text-primary mb-2"></i>
                            <h4 class="text-uppercase m-0">Email</h4>
                            <hr class="my-4 mx-auto" />
                            <div class="small text-black-50"><a href="#!">agenciadeviagemmountain@java.com</a></div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-3 mb-md-0">
                    <div class="card py-4 h-100">
                        <div class="card-body text-center">
                            <i class="fas fa-mobile-alt text-primary mb-2"></i>
                            <h4 class="text-uppercase m-0">Telefone</h4>
                            <hr class="my-4 mx-auto" />
                            <div class="small text-black-50">(+55) (21) 2345-8832</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="social d-flex justify-content-center">
                <a class="mx-2" href="https://www.linkedin.com/in/marciosgomes2781990/"><i class="fab fa-linkedin"></i></a>
                <a class="mx-2" href="https://www.facebook.com/marcio.gomes.961556/?viewas=100000686899395&show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_transition=0&show_community_review_changes=0"><i class="fab fa-facebook-f"></i></a>
                <a class="mx-2" href="https://github.com/marcio136"><i class="fab fa-github"></i></a>
            </div>
        </div>
    </section>
    )
}

export default Contato;