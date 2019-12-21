import React, { useEffect, useState } from "react"
// import oldPets from "../petdata"
import PetList from "./PetList"
import axios from "axios"

const Root = () => {
  const [pets, setPets] = useState([])

  // Using axios within "render" instead of useEffect will sorta work...
  // But you'll run into problems once you start trying to set state
  // ;(async function() {
  //   const { data } = await axios.get("/api/pets")
  //   setPets(data)
  // })()

  useEffect(() => {
    (async function() {
      const { data } = await axios.get("/api/pets")
      setPets(data)
      // try {
      //   const { data } = await axios.get("/api/pets")
      //   setPets(data)
      // } catch (err) {
      //   console.error(err)
      // }
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
