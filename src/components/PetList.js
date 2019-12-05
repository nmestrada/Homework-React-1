import React from "react"
import SinglePet from "./SinglePet"

const PetList = props => {
  const { pets } = props
  return (
    <div className="pet-list">
      {pets.map(pet => {
        return <SinglePet key={pet.id} pet={pet} />
      })}
    </div>
  )
}

export default PetList
