import React, { useEffect } from "react"
import pets from "../petdata"
import PetList from "./PetList"

const Root = () => {
  useEffect(() => {
    console.log('Mounting Root')
  })
  return (
    <>
      <h1>Adoption Center</h1>
      <PetList pets={pets} />
    </>
  )
}

export default Root
