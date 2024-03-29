import React from "react"
import { NavLink } from "react-router-dom"
import smallLogo from "../assets/small-logo.png"

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="footer-content ">
        <p>&copy; 2024 Sarah Proctor | LEARN Academy</p>
        <NavLink to="/">
          <img
            src={smallLogo}
            alt="small Cat Tinder logo"
            className="small-logo"
          />
        </NavLink>
      </div>
    </footer>
  )
}

export default Footer
