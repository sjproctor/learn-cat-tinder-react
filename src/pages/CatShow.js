import React from "react"
import { useParams } from "react-router-dom"

const CatShow = ({ cats }) => {
  const { id } = useParams()
  const cat = cats.find((item) => item.id === +id)
  return (
    <div className="page-body">
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
  )
}

export default CatShow
