import React from "react"
import PetList from "./PetList"
import axios from "axios"

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import samplePets from "./samplePets"

class Root extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      loading: true,
      error: false
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.getPetsFromServer = this.getPetsFromServer.bind(this)
  }

  async getPetsFromServer() {
    try {
      const response = await axios.get('/api/pets')
      this.setState({pets: response.data, loading: false, error: false})
    } catch(err) {
      this.setState({error: true, loading: false})
    }
  }

  handleDelete() {
    this.setState({loading: true})
    this.getPetsFromServer()
  }

  async componentDidMount() {
    this.getPetsFromServer()
  }

  render() {
    // if(this.state.error) return <h1>Error</h1>
    // if(this.state.loading) return <h1>Loading</h1>
    return (
      <>
        {this.state.error && <h1>Error</h1>}
        {this.state.loading && <h1>Loading</h1>}
        <h1>Adoption Center</h1>
        <PetList handleDelete={this.handleDelete} pets={this.state.pets} />
      </>
    )
  }

}

export default Root
