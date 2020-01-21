import React from "react"
import axios from "axios"

const DeletePet = props => {
  const { petId, handleDelete } = props
  const handleClick = async () => {
    try {
      await axios.delete(`/api/pets/${petId}`)
      handleDelete(petId)
    } catch (error) {
      console.error(error.message)
    }
  }
  return (
    <button onClick={handleClick} className="delete-pet">
      Delete
    </button>
  )
}

export default DeletePet
