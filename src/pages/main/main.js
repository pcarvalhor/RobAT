import React from 'react';
import { Link } from 'react-router-dom'; // Importe useNavigate

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import arrowRight from '../../assets/images/icons/graduation-cap.svg';

import './main.css';



const Main = () => {

  return (
    <div id='main'>
      <div id="page-landing">
        <div id="page-landing-content" className="container">
          <div className="logo-container">
            <img src={logoImg} alt="Proffy" />
            <h2>Robins-1 automated tool.</h2>
          </div>

          <img
            src={landingImg}
            alt="Plataforma de estudos"
            className="hero-image"
          />

          <div className="buttons-container">
            <Link to="/study" className="study">
              <img src={studyIcon} alt="Estudar" />
              ADD NEW REVIEW
            </Link>

            <Link to="/myreviews" className="give-classes">
              <img src={arrowRight} alt="Estudar" />
              ACCESS MY REVIEWS
            </Link>
          </div>

        </div>
      </div>
      <div className='footerMenu'>
        <p>ABOUT</p>
        <p>|</p>
        <p>HOW TO CITE</p>
        <p>|</p>
        <p>GITHUB</p>
      </div>
      <div className='footerMenu'>
        <span className="total-connections">
          © 2023 by the authors.
        </span>
      </div>
    </div>
  )
}

export default Main;

