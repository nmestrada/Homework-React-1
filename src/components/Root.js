import React, { useEffect, useState } from "react"
// import oldPets from "../petdata"
import PetList from "./PetList"
import axios from "axios"

const Root = () => {
  const [pets, setPets] = useState([])
  useEffect(() => {
    // console.log("Retrieving data...")
    (async function() {
      try {
        // const { data } = await axios.get("http://localhost:4321/api/pets")
        const { data } = await axios.get("/api/pets")
        // console.log(data)
        setPets(data)
      } catch (err) {
        console.error(err)
      }
    })()
    // If you don't provide a dependency array here, the component will
    // re-render in an infinite loop
  }, [])
  return (
    <>
      <h1>Adoption Center</h1>
      <PetList pets={pets} />
    </>
  )
}

export default Root
