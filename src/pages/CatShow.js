import NavButton from "../components/NavButton"
import { useParams } from "react-router-dom"

const CatShow = ({ cats }) => {
  const { id } = useParams()
  const cat = cats.find((item) => item.id === +id)
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
      <NavButton url="/cat-index" buttonContent="Back to All the Cats" />
    </div>
  )
}

export default CatShow
