import React, {Fragment} from "react"
import DeletePet from "./DeletePet"

class SinglePet extends React.Component {
  constructor() {
    super()
    this.state = {
      adopted: false
    }
    this.toggleAdopted = this.toggleAdopted.bind(this)
  }

  toggleAdopted() {
    this.setState({adopted: !this.state.adopted})
  }

  render() {
    const {pet} = this.props
    return(
      <div className="single-pet">
        <h2>{pet.name}</h2>
        <h3>{pet.species}</h3>
        <p>{pet.description}</p>
        <p>{this.state.adopted ? 'Adopted!' : 'Available for adoption'}</p>
        <button onClick={this.toggleAdopted}>Toggle Adopted</button>
        <DeletePet petId={pet.id} handleDelete={this.props.handleDelete} />
      </div>
    )
  }
}


export default SinglePet
