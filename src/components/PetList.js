import React from "react"
import SinglePet from "./SinglePet"
import pets from "../petdata"
const [rigatoni] = pets

// Idea: PetList starts out by rendering a SinglePet and PetList is rendered
// in the root. That way, when they start off, they can still see their changes
// to SinglePet in the browser as they work. When they get to Tier 2, they modify
// this component to render a list instead of just one SinglePet.
// General Solution
const PetList = props => {
  const { pets } = props
  return (
    <div className="pet-list">
      {pets.map(pet => {
        return <SinglePet key={pet.name} pet={pet} />
      })}
    </div>
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
