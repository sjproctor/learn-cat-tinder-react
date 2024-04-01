import React from "react"
import NavButton from "../components/NavButton"

const Home = () => {
  return (
    <div className="page-body">
      <h1 className="home-title handrawn-font ">Cat Tinder!</h1>
      <h3 className="home-font">
        Does your cat need a fury friend? Find your cat a playmate on Cat
        Tinder.
      </h3>
      <NavButton url="/cat-index" buttonContent="Meet the Cats" />
      <div className="home-hero">
        <div>
          <img
            src="https://images.unsplash.com/photo-1612804145457-d2fb2efc7795?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="a brown cat and a white cat snuggling"
            className="home-cat-picture"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1527416876370-fb74d128c3dc?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="two kittens on an outside wooden table looking at the camera"
            className="home-cat-picture"
          />
        </div>
      </div>
    </div>
  )
}

export default Home
