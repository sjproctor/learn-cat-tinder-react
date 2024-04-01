import React from "react"
import NavButton from "../components/NavButton"
import smallDog from "../assets/small-dog.jpeg"

const NotFound = () => {
  return (
    <div className="page-body center-content">
      <h1 className="page-title handrawn-font ">Ooops, no cats here!</h1>
      <NavButton url="/" buttonContent="Back Home" />
      <div>
        <img
          src={smallDog}
          alt="a small brown dachshund who is not a cat"
          className="notfound-dog-picture"
        />
      </div>
    </div>
  )
}

export default NotFound
