import React, { useState } from "react"
import SinglePet from "./SinglePet"

const PetList = props => {
  return (
    <>
      {/* We've added a testid to this div so that we can easily find it
          in the tests. */}
      <div data-testid="species-filter">
        {/* This is where the the dropdown menu should go */}
      </div>
      <div className="pet-list">
        {/* This is where the list of SinglePet components should go */}
      </div>
    </>
  )
}

export default PetList
