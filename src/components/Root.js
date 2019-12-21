import React, { useEffect, useState } from "react"
import samplePets from "../petdata"
import PetList from "./PetList"
import axios from 'axios'

// For now, Root renders PetList using sample pets data, but you can comment
// that out once you've got real data from the server to work with.
const Root = () => {
  return (
    <>
      <h1>Adoption Center</h1>
      <PetList pets={samplePets} />
    </>
  )
}

export default Root
