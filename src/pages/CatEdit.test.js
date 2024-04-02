import React from "react"
import { render, screen } from "@testing-library/react"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import CatEdit from "./CatEdit"
import mockCats from "../mockCats.js"

test("renders CatEdit component", () => {
  render(
    <MemoryRouter initialEntries={["/cat-edit/1"]}>
      <Routes>
        <Route path="/cat-edit/:id" element={<CatEdit cats={mockCats} />} />
      </Routes>
    </MemoryRouter>
  )

  const cat = mockCats.find((item) => item.id === 1)
  const catNewTitle = screen.getByText(`Edit ${cat.name}`)
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
  const clearButton = screen.getByText("Clear")
  expect(clearButton).toBeInTheDocument()
})
