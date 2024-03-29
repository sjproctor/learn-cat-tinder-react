import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Home from "./Home"

test("renders Home component", () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )

  const catTinderHeroText = screen.getByText(/Cat Tinder!/)
  expect(catTinderHeroText).toBeInTheDocument()

  const catTinderBodyText = screen.getByText(/Does your cat need a fury friend/)
  expect(catTinderBodyText).toBeInTheDocument()

  const catImage1 = screen.getByAltText("a brown cat and a white cat snuggling")
  expect(catImage1).toBeInTheDocument()
  expect(catImage1).toHaveAttribute(
    "src",
    "https://images.unsplash.com/photo-1612804145457-d2fb2efc7795?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  )

  const catImage2 = screen.getByAltText(
    "two kittens on an outside wooden table looking at the camera"
  )
  expect(catImage2).toBeInTheDocument()
  expect(catImage2).toHaveAttribute(
    "src",
    "https://images.unsplash.com/photo-1527416876370-fb74d128c3dc?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  )
})
