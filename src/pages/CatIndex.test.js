import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import CatIndex from "./CatIndex"
import mockCats from "../mockCats"

test("renders CatIndex component", () => {
  render(
    <BrowserRouter>
      <CatIndex cats={mockCats} />
    </BrowserRouter>
  )
  const catTinderHeroText = screen.getByText(/Meet the Cats/)
  expect(catTinderHeroText).toBeInTheDocument()

  mockCats.forEach((cat) => {
    const catName = screen.getByText(cat.name)
    expect(catName).toBeInTheDocument()
    const catImage = screen.getByAltText(`profile pic of ${cat.name}`)
    expect(catImage).toBeInTheDocument()
    expect(catImage).toHaveAttribute("src", cat.image)
  })
})
