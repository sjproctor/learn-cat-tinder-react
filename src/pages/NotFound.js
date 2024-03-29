import React from "react"
import smallDog from "../assets/small-dog.jpeg"

const NotFound = () => {
  return (
    <div className="page-body">
      <h1 className="notfound-title handrawn-font ">Ooops, no cats here!</h1>
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
