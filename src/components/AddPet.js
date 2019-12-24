import React, { useState } from "react"
import axios from "axios"

const AddPet = () => {
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
      const response = await axios.post("/api/pets", reqBody)
      console.log(response)
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
      <input placeholder="Name" type="text" name="name" />
      <input placeholder="Description" type="text" name="description" />
      {/* <input
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
      </select> */}
      <button type="submit">Submit New Pet</button>
    </form>
  )
}

export default AddPet
