import React from 'react'
import './style.css'

import hero_vnaut from '../../../assets/hero_vnaut.svg'

const HeroRoot = (props) => {
  return (
    <section className="hero-content">
      <div className="container">
        <div className="left-content">
          <h1 className="hero-title">Out of this world savings all in one space.</h1>
          <h3 className="hero-subtitle">We’ve collected amazing Vouchers Codes and Discounts so you don’t have to.</h3>

          {/* <div className="cta-button">View all brands!</div> */}
        </div>
        <div className="right-content">
          {/* <img className="vnaut-mascot" src={hero_vnaut} alt="The Vouchernaut Mascot" /> */}
        </div>
      </div>
    </section>
  )
}

export default HeroRoot
