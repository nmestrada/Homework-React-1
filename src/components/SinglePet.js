import React, { useState } from "react"
import DeletePet from "./DeletePet"

// This component receives props that look something like this:
/*
{
  pet: {
    name: "Rigatoni",
    species: "cat",
    description: "A flaming hot cheetoh in feline form"
  }
}
*/

// Class Solution
// class SinglePet extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       adopted: false
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleClick() {
//     this.setState(prevState => ({ adopted: !prevState.adopted }))
//   }
//   render() {
//     const { adopted } = this.state
//     const { name, description, species } = this.props.pet
//     return (
//       <div className="single-pet">
//         <h2>{name}</h2>
//         <div>{species}</div>
//         <div>{description}</div>
//         <hr />
//         <div>{adopted ? "Adopted!" : "Available for adoption"}</div>
//         <button onClick={this.handleClick}>Toggle Adopted</button>
//       </div>
//     )
//   }
// }

// Hooks Solution
const SinglePet = props => {
  const { id, name, description, species } = props.pet
  const [adopted, setAdopted] = useState(false)
  return (
    <div className="single-pet">
      <h2>{name}</h2>
      <div>
        {species}
        <span>
          {species === "cat" && " 😸"}
          {species === "dog" && " 🐶"}
        </span>
      </div>
      <div>{description}</div>
      <hr />
      <div>{adopted ? "Adopted!" : "Available for adoption"}</div>
      <button onClick={() => setAdopted(!adopted)}>Toggle Adopted</button>
      <DeletePet petId={id} />
    </div>
  )
}

export default SinglePet
