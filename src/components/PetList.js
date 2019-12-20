import React, { useState } from "react"
import SinglePet from "./SinglePet"
// import pets from "../petdata"
// const [rigatoni] = pets

const PetList = props => {
  const [filter, setFilter] = useState("all")
  const handleSelectChange = evt => {
    setFilter(evt.target.value)
  }
  const pets = props.pets.filter(pet => {
    if (filter === "all") return pet
    if (filter === "cats") return pet.species === "cat"
    if (filter === "dogs") return pet.species === "dog"
  })
  return (
    <>
      <div>
        <label htmlFor="speciesFilter">Filter by species: </label>
        {/* We've added a testid to this selecg so that we can easily find it
          in the tests. */}
        <select
          data-testid="species-filter"
          onChange={handleSelectChange}
          value={filter}
          name="speciesFilter"
        >
          <option>all</option>
          <option>cats</option>
          <option>dogs</option>
        </select>
      </div>
      <div className="pet-list">
        {pets.map(pet => {
          return <SinglePet key={pet.name} pet={pet} />
        })}
      </div>
    </>
  )
}

// Currently, PetList renders one SinglePet. We'd like it to render a list of
// pets, passed in as props.pets.
// const PetList = () => {
//   return (
//     <div className="pet-list">
//       <SinglePet pet={rigatoni} />
//     </div>
//   )
// }

export default PetList
