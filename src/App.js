import { useState, useEffect } from "react"
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

const App = () => {
  const [cats, setCats] = useState([])
  console.log(cats)
  useEffect(() => {
    getCats()
  }, [])

  const getCats = async () => {
    try {
      const getResponse = await fetch("http://localhost:3000/cats")
      if (!getResponse.ok) {
        throw new Error("Error on cat get request")
      }
      const getResult = await getResponse.json()
      setCats(getResult)
    } catch (error) {
      console.error("Error fetching data:", error.message)
    }
  }

  const createNewCat = async (newCat) => {
    try {
      const postResponse = await fetch("http://localhost:3000/cats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newCat)
      })
      if (!postResponse.ok) {
        throw new Error("Error on cat post request")
      }
      await postResponse.json()
      getCats()
    } catch (error) {
      console.error("Error fetching data:", error.message)
    }
  }

  const editCat = async (cat, id) => {
    try {
      const postResponse = await fetch(`http://localhost:3000/cats/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(cat)
      })
      if (!postResponse.ok) {
        throw new Error("Error on cat post request")
      }
      await postResponse.json()
      getCats()
    } catch (error) {
      console.error("Error fetching data:", error.message)
    }
  }

  const deleteCat = async (id) => {
    try {
      // Send DELETE request to delete the specified cat
      const response = await fetch(`http://localhost:3000/cats/${id}`, {
        method: "DELETE"
      })
      if (!response.ok) {
        throw new Error("Error deleting cat")
      }
      getCats()
    } catch (error) {
      console.error("Error deleting cat:", error.message)
    }
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
