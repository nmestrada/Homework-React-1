import React, { Fragment } from "react"
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
  constructor(props) {
    super(props)
    this.state = {
      category: 'all'
    }
    this.filterPets = this.filterPets.bind(this)
  }

  filterPets(event) {
    let selectedCategory;
    if(event.target.value === 'all') {
      selectedCategory = 'all'
    } else {
      selectedCategory = event.target.value
    }
    this.setState({category: selectedCategory})
  }

  render() {
    let pets;
    if(this.state.category === 'all') {
      pets = this.props.pets
    } else {
      pets = this.props.pets.filter(pet => {
        return pet.species + 's' === this.state.category
      })
    }
    return (
      <Fragment>
        <select onChange={this.filterPets}>
          <option value='all'>all</option>
          <option value='cats'>cats</option>
          <option value='dogs'>dogs</option>
        </select>
        <div className="pet-list">
          {
            pets.map(pet => (
              <SinglePet handleDelete={this.props.handleDelete} key={pet.id} pet={pet} />
            ))
          }
        </div>
      </Fragment>
    )
  }
}

export default PetList
