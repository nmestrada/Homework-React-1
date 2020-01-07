import React, { useState } from "react"
import axios from "axios"

// Class Solution
class AddPet extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "",
      description: "",
      species: "cat"
    }

    this.defaultState = { ...this.state }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  resetForm() {
    this.setState(this.defaultState)
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(evt) {
    evt.preventDefault()
    const { name, description, species } = this.state
    try {
      const reqBody = { name, description, species }
      await axios.post("/api/pets", reqBody)
      this.props.refetch()
      this.resetForm()
    } catch (err) {
      console.error(err.message)
    }
  }

  render() {
    const { name, description, species } = this.state

    return (
      <form
        className="add-pet-form"
        onSubmit={this.handleSubmit}
        data-testid="add-pet"
      >
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
        />
        <input
          name="description"
          type="text"
          placeholder="Description"
          value={description}
          onChange={this.handleChange}
        />
        <select name="species" value={species} onChange={this.handleChange}>
          <option>cat</option>
          <option>dog</option>
        </select>
        <button type="submit">Submit New Pet</button>
      </form>
    )
  }
}

// Hooks Solution
// const AddPet = props => {
//   const [name, setName] = useState("")
//   const [description, setDescription] = useState("")
//   const [species, setSpecies] = useState("cat")
//   const handleChange = evt => {
//     if (evt.target.name === "name") setName(evt.target.value)
//     if (evt.target.name === "description") setDescription(evt.target.value)
//     if (evt.target.name === "species") setSpecies(evt.target.value)
//   }
//   const handleSubmit = async evt => {
//     evt.preventDefault()
//     try {
//       const reqBody = { name, description, species }
//       await axios.post("/api/pets", reqBody)
//       props.refetch()
//       setName("")
//       setDescription("")
//       setSpecies("cat")
//     } catch (err) {
//       console.error(err.message)
//     }
//   }
//   return (
//     <form
//       className="add-pet-form"
//       onSubmit={handleSubmit}
//       data-testid="add-pet"
//     >
//       <input
//         name="name"
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={handleChange}
//       />
//       <input
//         name="description"
//         type="text"
//         placeholder="Description"
//         value={description}
//         onChange={handleChange}
//       />
//       <select name="species" value={species} onChange={handleChange}>
//         <option>cat</option>
//         <option>dog</option>
//       </select>
//       <button type="submit">Submit New Pet</button>
//     </form>
//   )
// }

export default AddPet
