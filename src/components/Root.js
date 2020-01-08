import React, { useEffect, useState } from "react"
// import oldPets from "../petdata"
import PetList from "./PetList"
import axios from "axios"
import AddPet from "./AddPet"

// Class Solution
class Root extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      error: null,
      loading: true
    }
    this.fetchPets = this.fetchPets.bind(this)
  }

  async fetchPets() {
    try {
      const { data } = await axios.get("/api/pets")
      this.setState({ pets: data })
    } catch (err) {
      this.setState({ error: err.message })
    } finally {
      this.setState({ loading: false })
    }
  }
  componentDidMount() {
    this.fetchPets()
  }

  render() {
    const { error, loading, pets } = this.state
    return (
      <>
        {error}
        {loading && "Loading"}
        <h1>Adoption Center</h1>
        <AddPet refetch={this.fetchPets} />
        {/* <div>Hello World!</div> */}
        <PetList pets={pets} />
      </>
    )
  }
}

// Hooks Solution
// const Root = () => {
//   const [pets, setPets] = useState([])
//   const [error, setError] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [fetchCounter, setFetchCounter] = useState(0)
//   useEffect(() => {
//     (async function() {
//       try {
//         const { data } = await axios.get("/api/pets")
//         setPets(data)
//       } catch (err) {
//         setError(err.message)
//       } finally {
//         setLoading(false)
//       }
//     })()
//   }, [fetchCounter])
//   const refetch = () => setFetchCounter(fetchCounter + 1)
//   // const refetch = () => {}
//   return (
//     <>
//       {error}
//       {loading && "Loading"}
//       <h1>Adoption Center</h1>
//       <AddPet refetch={refetch} />
//       <PetList pets={pets} />
//     </>
//   )
// }

export default Root
