import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "./Header"

test("renders Header component", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )

  const catLogo = screen.getByAltText("Cat Tinder logo with outline of cat")
  expect(catLogo).toBeInTheDocument()
  expect(
    screen.getByRole("link", { name: "Cat Tinder logo with outline of cat" })
  ).toHaveAttribute("href", "/")

  const meetTheCatsLink = screen.getByText("Meet the Cats")
  expect(meetTheCatsLink).toBeInTheDocument()
  expect(screen.getByRole("link", { name: "Meet the Cats" })).toHaveAttribute(
    "href",
    "/cat-index"
  )

  const addNewCatLink = screen.getByText("Add a New Cat")
  expect(addNewCatLink).toBeInTheDocument()
  expect(screen.getByRole("link", { name: "Add a New Cat" })).toHaveAttribute(
    "href",
    "/cat-new"
  )

  const adoptACatLink = screen.getByText("Adopt a Cat!")
  expect(adoptACatLink).toBeInTheDocument()
  expect(screen.getByRole("link", { name: "Adopt a Cat!" })).toHaveAttribute(
    "href",
    "https://www.aspca.org/adopt-pet/adoptable-cats-your-local-shelter"
  )
})
