import React from "react"
import axios from "axios"

/**
 * Steps
 * 1. Render a button with "Delete" in it
 * 2. Give it the class "delete-button"
 * 3. When user clicks the button, send DELETE to /api/pets/:petId
 *    where petId is provided by props
 * 4. Call the `handleDelete` function, provided on props
 * 5. INTEGRATION STEP! The pet should now be deleted either
 *    a. refetch the pets from the server again
 *    b. syncronously remove the pet from the Root component
 */

const DeletePet = props => {
  const { handleDelete, petId } = props
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
