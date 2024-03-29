import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Footer from "./Footer"

test("renders Footer component", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  )

  const catLogo = screen.getByAltText("small Cat Tinder logo")
  expect(catLogo).toBeInTheDocument()
  expect(
    screen.getByRole("link", { name: "small Cat Tinder logo" })
  ).toHaveAttribute("href", "/")

  // getByText using a substring matcher to handle copyright symbol
  const meetTheCatsLink = screen.getByText(/2024 Sarah Proctor | LEARN Academy/)
  expect(meetTheCatsLink).toBeInTheDocument()
})
