import React from 'react';
import Logo from "./img/logo 1.png"
import './Google.css';


const Google = () => {
  return (
    <div className="container">
      <img
        src={Logo}
        alt="Descrição da imagem"
        className="imagem-centralizada"
      />
    </div>
  );
};

export default Google;
