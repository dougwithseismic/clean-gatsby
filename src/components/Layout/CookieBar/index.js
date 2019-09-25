import React from 'react'
import './style.css'

const CookieBar = (props) => {
  return (
    <div className="cookie-bar">
      <div className="container">
        <div className="cookie-info">
          <h3>Cookies on vouchernaut.com</h3>
          <p style={{ marginBottom: '2em'}}>
            The vouchernaut website employs cookies to improve your user experience. We have updated our cookie
            policy to reflect changes in the law on cookies and tracking technologies used on websites. If you continue
            on this website, you will be providing your consent to our use of cookies.
          </p>
          <div className="cookie-buttons">
          <div className="cookie-info-button">Find out more</div>
          <div className="accept-cookies-button">I accept cookies from this site</div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBar
