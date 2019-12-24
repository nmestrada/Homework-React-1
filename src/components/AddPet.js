import React, { useState } from "react"
import axios from "axios"

const AddPet = props => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [species, setSpecies] = useState("cat")
  const handleChange = evt => {
    if (evt.target.name === "name") setName(evt.target.value)
    if (evt.target.name === "description") setDescription(evt.target.value)
    if (evt.target.name === "species") setSpecies(evt.target.value)
  }
  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      const reqBody = { name, description, species }
      await axios.post("/api/pets", reqBody)
      props.refetch()
      setName("")
      setDescription("")
      setSpecies("cat")
    } catch (err) {
      console.error(err.message)
    }
  }
  return (
    <form
      className="add-pet-form"
      onSubmit={handleSubmit}
      data-testid="add-pet"
    >
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleChange}
      />
      <input
        name="description"
        type="text"
        placeholder="Description"
        value={description}
        onChange={handleChange}
      />
      <select name="species" value={species} onChange={handleChange}>
        <option>cat</option>
        <option>dog</option>
      </select>
      <button type="submit">Submit New Pet</button>
    </form>
  )
}

export default AddPet
