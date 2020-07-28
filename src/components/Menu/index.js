import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/netflix_logo.png';
import './Menu.css'
import Button from '../Button';

function Menu(){
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Netflix logo"/>
      </Link>
      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo vídeo
      </Button>
    </nav>

  );
}

export default Menu;