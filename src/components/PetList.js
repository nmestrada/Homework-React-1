import React from "react"
import SinglePet from "./SinglePet"
import pets from "../petdata"
const [rigatoni] = pets

// Currently, PetList renders one SinglePet. We'd like it to render a list of
// pets, passed in as props.pets.
const PetList = () => {
  return (
    <div className="pet-list">
      <SinglePet pet={rigatoni} />
    </div>
  )
}

export default PetList
