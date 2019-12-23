import React, { useState } from "react"

const AddPet = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [species, setSpecies] = useState("cat")
  const handleChange = evt => {
    if (evt.target.name === "name") setName(evt.target.value)
    if (evt.target.name === "description") setDescription(evt.target.value)
    if (evt.target.name === "species") setSpecies(evt.target.value)
  }
  return (
    <form className="add-pet-form">
      <input
        name="name"
        type="text"
        placeholder="Name"
        onChange={handleChange}
      />
      <input
        name="description"
        type="text"
        placeholder="Description"
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
