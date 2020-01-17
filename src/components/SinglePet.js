import React from "react"
import DeletePet from "./DeletePet"

class SinglePet extends React.Component {
  constructor() {
    super()
    this.state = {
      adopted: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({ adopted: !prevState.adopted }))
  }

  render() {
    const { adopted } = this.state
    const {
      handleDelete,
      pet: { id, name, description, species }
    } = this.props
    return (
      <div className="single-pet">
        <div>{name}</div>
        <div>{description}</div>
        <div>{species}</div>
        <div>{adopted ? "Adopted!" : "Available for adoption"}</div>
        <button type="button" onClick={this.handleClick}>
          Toggle Adopted
        </button>
        <DeletePet petId={id} handleDelete={handleDelete} />
      </div>
    )
  }
}

export default SinglePet
