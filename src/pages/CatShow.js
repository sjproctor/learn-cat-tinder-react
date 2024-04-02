import NavButton from "../components/NavButton"
import { useParams, useNavigate } from "react-router-dom"

const CatShow = ({ cats, editCat, deleteCat }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const cat = cats.find((item) => item.id === +id)
  const handleEditCat = () => {
    editCat(cat.id)
    navigate(`/cat-edit/${cat.id}`)
  }
  const handleDeleteCat = () => {
    deleteCat(cat.id)
    navigate("/cat-index")
  }
  return (
    <div className="page-body center-content">
      <div>
        <h3 className="handrawn-font cat-name">Meet {cat.name}</h3>
        <p>Age {cat.age}</p>
        <p>
          {cat.name} enjoys {cat.enjoys}.
        </p>
        <img
          src={cat.image}
          alt={`profile of ${cat.name}`}
          className="cat-image"
        />
      </div>
      <br />
      <div>
        <button
          className="nav-button form-buttons handrawn-font"
          onClick={handleEditCat}
        >
          Edit {cat.name}
        </button>
        <button
          className="nav-button form-buttons handrawn-font"
          onClick={handleDeleteCat}
        >
          Delete {cat.name}
        </button>
        <NavButton url="/cat-index" buttonContent="Back to All the Cats" />
      </div>
    </div>
  )
}

export default CatShow
