import React, { useEffect } from "react"
import pets from "../petdata"
import PetList from "./PetList"
import axios from 'axios'

const Root = () => {
  useEffect(() => {
    console.log('Retrieving data...')
    ;(async function() {
      const { data } = await axios.get('http://localhost:4321/api/pets')
      console.log(data)
    })()
  })
  return (
    <>
      <h1>Adoption Center</h1>
      <PetList pets={pets} />
    </>
  )
}

export default Root
