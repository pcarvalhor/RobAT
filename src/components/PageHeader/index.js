import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logoImg from '../../assets/images/robat.png';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';



const PageHeader = (props) => {

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navega para a página anterior na pilha de histórico
  };

  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link onClick={handleGoBack}>
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {props.description && <p>{props.description}</p>}

        {props.children}
      </div>
    </header>
  );
}

export default PageHeader;
