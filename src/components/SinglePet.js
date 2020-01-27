import React, {useState} from "react"
import DeletePet from './DeletePet'

const SinglePet = (props) => {
  const [status, updateStatus] = useState('Available')
  const [className, setClassName] = useState('single-pet')
  const toggler = curStatus => {
      if(curStatus === 'Available'){
          curStatus = 'Adopted!'
          setClassName('single-pet adopted')
      }else {
          curStatus = 'Available'
          setClassName('single-pet')
      }
      return curStatus
  }
  return <div className={className}>
        {props.pet.name}
        {props.pet.description}
        {props.pet.species}
        {status}
    <button type="button" onClick={() => updateStatus(prevStatus => toggler(prevStatus))}>Toggle Status</button>
    <DeletePet petId={props.pet.id} handleDelete={props.handleDelete}/>
    </div>
}

export default SinglePet
