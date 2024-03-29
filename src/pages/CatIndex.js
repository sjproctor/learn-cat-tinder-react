import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"

const CatIndex = ({ cats }) => {
  return (
    <div className="page-body">
      <h1 className="index-title handrawn-font ">Meet the Cats!</h1>
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
                <CardTitle tag="h5">{cat.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Age {cat.age}
                </CardSubtitle>
                <Button>See More</Button>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default CatIndex
