import React from "react"
import axios from 'axios'

const DeletePet = (props) => {
    async function deletePet() {
        try{
            await axios.delete(`/api/pets/${props.petId}`)
            props.handleDelete();
        }catch (err){
            console.log(err.message)
        }
    }
    return (
        <button type='button' className="delete-pet" onClick={()=>deletePet()}>Delete</button>
    )
}

export default DeletePet
