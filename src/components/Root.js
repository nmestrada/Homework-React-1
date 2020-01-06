import React, { useEffect, useState } from "react"
// import oldPets from "../petdata"
import PetList from "./PetList"
import axios from "axios"
import AddPet from "./AddPet"

const Root = () => {
  const [pets, setPets] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [fetchCounter, setFetchCounter] = useState(0)
  useEffect(() => {
    (async function() {
      try {
        const { data } = await axios.get("/api/pets")
        setPets(data)
      } catch (err) {
        console.error(err)
        setError(err.message)
        // throw new Error(err)
      } finally {
        setLoading(false)
      }
    })()
  }, [fetchCounter])
  const refetch = () => setFetchCounter(fetchCounter + 1)
  // const refetch = () => {}
  return (
    <>
      {error}
      {loading && "Loading"}
      <h1>Adoption Center</h1>
      <AddPet refetch={refetch} />
      <PetList pets={pets} />
    </>
  )
}

export default Root
