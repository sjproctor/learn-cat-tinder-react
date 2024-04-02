import { render, screen } from "@testing-library/react"
import CatShow from "../pages/CatShow"
import { MemoryRouter, Routes, Route } from "react-router-dom"
import mockCats from "../mockCats.js"

test("renders CatShow component", () => {
  render(
    <MemoryRouter initialEntries={["/cat-show/1"]}>
      <Routes>
        <Route path="/cat-show/:id" element={<CatShow cats={mockCats} />} />
      </Routes>
    </MemoryRouter>
  )
  const cat = mockCats.find((item) => item.id === 1)
  const catName = screen.getByText(`Meet ${cat.name}`)
  expect(catName).toBeInTheDocument()
  const catAge = screen.getByText(`Age ${cat.age}`)
  expect(catAge).toBeInTheDocument()
  const catEnjoys = screen.getByText(`${cat.name} enjoys ${cat.enjoys}.`)
  expect(catEnjoys).toBeInTheDocument()
  const catImage = screen.getByAltText(`profile of ${cat.name}`)
  expect(catImage).toBeInTheDocument()
  expect(catImage).toHaveAttribute("src", cat.image)
})
