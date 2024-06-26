import React from "react"
import NavButton from "../components/NavButton"
import { Card, CardBody, CardTitle } from "reactstrap"

const CatIndex = ({ cats }) => {
  return (
    <div className="page-body center-content">
      <h3 className="page-title handrawn-font">Meet the Cats!</h3>
      <div className="index-cards">
        {cats.map((cat) => {
          return (
            <Card key={cat.id}>
              <div className="index-profile-image">
                <img
                  alt={`profile pic of ${cat.name}`}
                  src={cat.image}
                  className="cat-image"
                />
              </div>
              <CardBody>
                <CardTitle tag="h5" className="handrawn-font cat-name">
                  {cat.name}
                </CardTitle>
                <NavButton
                  url={`/cat-show/${cat.id}`}
                  buttonContent="See More"
                />
              </CardBody>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default CatIndex
