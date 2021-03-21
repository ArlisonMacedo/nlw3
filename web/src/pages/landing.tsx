import React from 'react'
import {Link} from 'react-router-dom'
import {FiArrowRight} from 'react-icons/fi'

import logoImg from '../assets/Logo.svg'

import '../styles/pages/landing.css'

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy logo"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>
            Visite orfanatos e mude o dia
            de muitas crianças.
          </p>
        </main>

        <div className="location">
          <strong>Maracaçumé</strong>
          {/* <span>Maranhão</span> */}
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={22} color='rgba(0,0,0,0.6)' />
        </Link>

      </div>
    </div>
  );
}

export default Landing 