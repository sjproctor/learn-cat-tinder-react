import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import CatNew from "./CatNew"

test("renders CatNew component", () => {
  render(
    <BrowserRouter>
      <CatNew />
    </BrowserRouter>
  )

  const catNewTitle = screen.getByText(/Add a New Cat/)
  expect(catNewTitle).toBeInTheDocument()
  const catNameInput = screen.getByLabelText(/Cat name/)
  expect(catNameInput).toBeInTheDocument()
  const catAgeInput = screen.getByLabelText(/Cat age/)
  expect(catAgeInput).toBeInTheDocument()
  const catEnjoyInput = screen.getByLabelText(/What does your cat like to do/)
  expect(catEnjoyInput).toBeInTheDocument()
  const catImageInput = screen.getByLabelText(/Image URL/)
  expect(catImageInput).toBeInTheDocument()
  const submitButton = screen.getByText("Submit")
  expect(submitButton).toBeInTheDocument()
})
