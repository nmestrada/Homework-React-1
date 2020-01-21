import React from "react"
import PetList from "./PetList"
import axios from "axios"

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import samplePets from "../petdata"

class Root extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      loading: true,
      error: null
    }
  }
  async componentDidMount() {
    try {
      const { data } = await axios.get("/api/pets")
      this.setState({ pets: data, loading: false })
    } catch (error) {
      this.setState({ error, loading: false })
    }
  }
  render() {
    const { pets, error, loading } = this.state
    return (
      <>
        {error && <div>Error: {error.message}</div>}
        {loading && <div>Loading...</div>}
        <h1>Adoption Center</h1>
        <PetList pets={pets} />
      </>
    )
  }
}

export default Root
