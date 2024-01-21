import React from 'react'
import './Header.css'
import Menu from './img/menu 1.png'
import Foto from './img/foto 1.png'

const Header = () => {
    return (
        <div className='Header'>
            <p>Gmail</p>
            <p>Imagens</p>
            <img src= {Menu} alt='Menu' className='Menu'/> 
            <img src= {Foto} alt='Foto' className='Foto'/>
        </div>
    )
}

export default Header 
