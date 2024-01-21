import React from 'react';
import Lupa from "./img/lupa 1.png"
import Teclado from "./img/teclado 1.png"
import Microfone from "./img/microfone 1.png"
import './Input.css'



const Input = () => {
  return (
    <div className="pesquisar">
        <img 
        src={Lupa}
        alt="Descrição da imagem"
        className="lupa"
      />
      <input type='search' className='searchbar'></input>
      <div className='LadoDireito'>
      <img
        src={Teclado}
        alt="Descrição da imagem"
        className="teclado"
      />
      <img
        src={Microfone}
        alt="Descrição da imagem"
        className="microfone"
      />
      </div>
    </div>
  );
};

export default Input;
