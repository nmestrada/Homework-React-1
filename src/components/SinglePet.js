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
    const { id, name, description, species } = this.props.pet
    const { handleDelete } = this.props
    const { adopted } = this.state
    return (
      <div className={`single-pet ${adopted ? "adopted" : ""}`}>
        <div>{name}</div>
        <div>{species}</div>
        <div>{description}</div>
        <hr />
        <div>{adopted ? "Adopted!" : "Available"}</div>
        <button onClick={this.handleClick}>Toggle Status</button>
        <DeletePet petId={id} handleDelete={handleDelete} />
      </div>
    )
  }
}

export default SinglePet
