import React from "react"
import SinglePet from "./SinglePet"

const cody = {
  id: 2,
  name: "Cody",
  description: "Adorable pug who loves to hug",
  species: "dog"
}

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
class PetList extends React.Component {
  constructor() {
    super()
    this.state = {
      filter: "all"
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      filter: event.target.value
    })
  }

  render() {
    const { filter } = this.state
    const { pets, handleDelete } = this.props
    const filteredPets = pets.filter(pet => {
      if (filter === "all") return true
      return pet.species + "s" === filter
    })
    return (
      <div className="pet-list">
        <select onChange={this.handleChange} value={filter}>
          <option>all</option>
          <option>cats</option>
          <option>dogs</option>
        </select>
        {filteredPets.map(pet => {
          return (
            <SinglePet key={pet.id} pet={pet} handleDelete={handleDelete} />
          )
        })}
      </div>
    )
  }
}

export default PetList
