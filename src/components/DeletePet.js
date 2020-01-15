import React from "react"
import axios from "axios"

const DeletePet = props => {
  const { refetch, petId } = props
  const handleClick = async () => {
    try {
      await axios.delete(`/api/pets/${petId + 1}`)
    } catch (err) {
      console.error(err.message)
    }
  }
  return (
    <button className="delete-button" onClick={handleClick}>
      Delete
    </button>
  )
}

export default DeletePet
