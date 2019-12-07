import React, { useState } from "react"
import SinglePet from "./SinglePet"
// import pets from "../petdata"
// const [rigatoni] = pets

const PetList = props => {
  const [filter, setFilter] = useState("all")
  const handleSelectChange = evt => {
    setFilter(evt.target.value)
  }
  const { pets } = props
  return (
    <>
      <div>
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
