import React, { useState } from "react"

const AddPet = () => {
  return (
    <form>
      <input name="name" type="text" placeholder="Name" />
      <input name="description" type="text" placeholder="Description" />
      <select name="species">
        <option>cat</option>
        <option>dog</option>
      </select>
      <button type="submit">Submit New Pet</button>
    </form>
  )
}

export default AddPet
