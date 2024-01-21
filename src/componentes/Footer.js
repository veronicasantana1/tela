import React from "react";
import './Footer.css'

const Footer = () => {
    return(
        <div className="Footer">
           <div className="Cima"> <p>Brasil</p> </div>
           <hr></hr>
            <div className="Informacao">
            <div className="Esquerda"> 
               <p>Sobre</p> 
               <p className="Meio">Publicidade</p> 
               <p className="Meio">Negócios</p> 
               <p>Como funciona a Pesquisa</p> 
            </div>
            <div className="Direita"> 
               <p>Privacidades</p> 
               <p className="Meio">Termos</p> 
               <p>Configurações</p> 
            </div>
            </div>
        </div>
       
    )
}

export default Footer 