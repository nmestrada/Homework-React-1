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
    const { pets, handleDelete } = this.props
    const { filter } = this.state
    const filteredPets = pets.filter(pet => {
      if (filter === "all") return pet
      if (filter === "cats") return pet.species === "cat"
      if (filter === "dogs") return pet.species === "dog"
    })
    return (
      <>
        <div>
          <label htmlFor="species-filter">Filter pets by species: </label>
          <select
            name="species-filter"
            value={filter}
            onChange={this.handleChange}
          >
            <option>all</option>
            <option>cats</option>
            <option>dogs</option>
          </select>
        </div>
        <div className="pet-list">
          {filteredPets.map(pet => (
            <SinglePet key={pet.id} pet={pet} handleDelete={handleDelete} />
          ))}
        </div>
      </>
    )
  }
}

export default PetList
