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
      {/* We've added a testid to this div so that we can easily find it
          in the tests. */}
      <div data-testid="species-filter">
        <label htmlFor="speciesFilter">Filter by species: </label>
        <select
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

export default PetList
