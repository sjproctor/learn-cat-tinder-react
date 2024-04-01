import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NavButton from "./NavButton"

test("NavButton", () => {
  render(
    <BrowserRouter>
      <NavButton url="test" buttonContent="Test Button" />
    </BrowserRouter>
  )

  const buttonText = screen.getByText("Test Button")
  expect(buttonText).toBeInTheDocument()
  expect(screen.getByRole("link")).toHaveProperty(
    "href",
    "http://localhost/test"
  )
})
