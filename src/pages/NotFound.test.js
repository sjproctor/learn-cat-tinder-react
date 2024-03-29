import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotFound from "./NotFound"
import smallDog from "../assets/small-dog.jpeg"

test("renders NotFound component", () => {
  render(
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  )

  const catTinderHeroText = screen.getByText(/Ooops, no cats here/)
  expect(catTinderHeroText).toBeInTheDocument()

  const dogImage = screen.getByAltText(
    "a small brown dachshund who is not a cat"
  )
  expect(dogImage).toBeInTheDocument()
  expect(dogImage).toHaveAttribute("src", smallDog)
})
