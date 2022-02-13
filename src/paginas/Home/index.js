import React from "react";
import './../../componentes/styles.css';
import Header from '../../componentes/Header';
import Footer from "../../componentes/Footer";
import Nav from "../../componentes/Nav";
import About from "../../componentes/About";
import Projeto from "../../componentes/Projeto";
import Contato from "../Contato";

function Home(){
    return(
        <section>
            <Header/>
            <Nav/>
            <About/>
            <Projeto/>
            <Contato/>
            <Footer/>
        </section>
        

    )
}

export default Home;