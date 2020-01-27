import React, {useEffect, useState} from "react"
import PetList from "./PetList"
import axios from 'axios'

// We'll render these sample pets for now. Later, we'll instead fetch the list
// of pets from the server! We won't need samplePets after that.
import samplePets from "../petdata"

const Root = () => {
const [pets, setPets] = useState([])
const [error, setError] = useState('')
const handleDelete = () => {};
useEffect(()=>{
    async function fetchData(){
        try {
            const {data} = await axios.get('/api/pets');
            setPets(data);
        }catch(err){
            setError(err)
        }
    }
    fetchData();
    
}, [handleDelete])
  return (
    <>
      {error.message? <div>Error! {error.message}</div> :
      <h1>Adoption Center
      {pets.length?<PetList pets={pets} handleDelete={handleDelete} /> : ' Loading! '}
      </h1>}
    </>
  )
}

export default Root
