import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import CatEdit from "./pages/CatEdit"
import CatIndex from "./pages/CatIndex"
import CatNew from "./pages/CatNew"
import CatShow from "./pages/CatShow"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import mockCats from "./mockCats"

const App = () => {
  const [cats, setCats] = useState(mockCats)
  const createNewCat = (newCat) => {
    console.log(newCat)
  }
  const editCat = (cat, id) => {
    console.log("edit:", cat)
    console.log("edit:", id)
  }
  const deleteCat = (id) => {
    console.log("delete:", id)
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat-index" element={<CatIndex cats={cats} />} />
        <Route
          path="/cat-show/:id"
          element={<CatShow cats={cats} deleteCat={deleteCat} />}
        />
        <Route
          path="/cat-new"
          element={<CatNew createNewCat={createNewCat} />}
        />
        <Route
          path="/cat-edit/:id"
          element={<CatEdit cats={cats} editCat={editCat} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
