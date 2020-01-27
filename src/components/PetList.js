import React, {useState, useEffect} from "react"
import SinglePet from "./SinglePet"

const cody = {
  id: 2,
  name: "Cody",
  description: "Adorable pug who loves to hug",
  species: "dog"
}

// PetList only renders one SinglePet. We'd like it to render a list of pets,
// passed in as props.pets. Don't forget to add a unique key to each one!
const PetList = (props) => {
  const [pets, setPets] = useState(props.pets)
  const filterPets = (value) => {
      let petsArr = props.pets;
      if(value !== 'all') {
          petsArr = petsArr.filter(elem => elem.species === value.slice(0,-1))
        }
      setPets(petsArr)
  }
  const handleChange = value => {
      filterPets(value)
  }
  return (
    <React.Fragment>
        <select onChange={(event) => handleChange(event.target.value)}>
            <option value='all'>all</option>
            <option value='dogs'>dogs</option>
            <option value='cats'>cats</option>
        </select>
        <div key='pet.id' className="pets-list">
            {pets.map(pet =><SinglePet key ={pet.id} pet={pet} handleDelete={props.handleDelete}/>)}
       </div> 
    </React.Fragment>
  )
}

export default PetList
