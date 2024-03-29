import React from "react"
import { NavLink } from "react-router-dom"
import catLogo from "../assets/cat-tinder-logo.png"

const Header = () => {
  return (
    <nav className="header-nav">
      <div>
        <NavLink to="/">
          <img
            src={catLogo}
            alt="Cat Tinder logo with outline of cat"
            className="cat-logo"
          />
        </NavLink>
      </div>
      <div className="nav-link-group">
        <ul>
          <NavLink to="/cat-index" className="nav-link">
            Meet the Cats
          </NavLink>
        </ul>
        <ul>
          <NavLink to="/cat-new" className="nav-link">
            Add a New Cat
          </NavLink>
        </ul>
        <ul>
          <a
            target="blank"
            href="https://www.aspca.org/adopt-pet/adoptable-cats-your-local-shelter"
            className="nav-link"
          >
            Adopt a Cat!
          </a>
        </ul>
      </div>
    </nav>
  )
}

export default Header
