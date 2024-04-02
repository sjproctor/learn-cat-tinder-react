import { useForm } from "react-hook-form"
import { Form, FormGroup, Label } from "reactstrap"
import { useParams, useNavigate } from "react-router-dom"

const CatEdit = ({ cats, editCat }) => {
  const { id } = useParams()
  const cat = cats.find((item) => item.id === +id)
  const navigate = useNavigate()
  const preloadedValues = {
    name: cat.name,
    age: cat.age,
    enjoys: cat.enjoys,
    image: cat.image
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: preloadedValues
  })

  const onSubmit = (editedCat) => {
    editCat(editedCat, cat.id)
    navigate(`/cat-show/${cat.id}`)
  }

  return (
    <div className="page-body">
      <h3 className="handrawn-font page-title center-content">
        Edit {cat.name}
      </h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="name-age">
          <FormGroup>
            <Label for="name">Cat name*</Label>
            <input
              id="name"
              name="name"
              placeholder="name"
              type="text"
              className="form-control"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="form-errors">*Required field</span>
            )}
          </FormGroup>
          <FormGroup>
            <Label for="age">Cat age (in years)*</Label>
            <input
              id="age"
              name="age"
              placeholder="age"
              type="number"
              className="form-control"
              {...register("age", { required: true })}
            />
            {errors.age && <span className="form-errors">*Required field</span>}
          </FormGroup>
        </div>
        <FormGroup>
          <Label for="enjoys">What does your cat like to do?*</Label>
          <input
            id="enjoys"
            name="enjoys"
            placeholder="enjoys"
            type="text-field"
            className="form-control"
            {...register("enjoys", { required: true })}
          />
          {errors.enjoys && (
            <span className="form-errors">*Required field</span>
          )}
        </FormGroup>
        <FormGroup>
          <Label for="image">Image URL*</Label>
          <input
            id="image"
            name="image"
            placeholder="image"
            type="text"
            className="form-control"
            {...register("image", { required: true })}
          />
          {errors.image && <span className="form-errors">*Required field</span>}
        </FormGroup>
        <div className="center-content">
          <button
            className="nav-button form-buttons handrawn-font"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="nav-button form-buttons handrawn-font"
            onClick={() =>
              reset((formValues) => ({
                ...formValues,
                name: "",
                age: "",
                enjoys: "",
                image: ""
              }))
            }
          >
            Clear
          </button>
        </div>
      </Form>
    </div>
  )
}

export default CatEdit
