import React from "react"

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
const SinglePet = props => {
  console.log(props)
  return (
    <div className="single-pet">
      {/* Your Code Goes Here */}
    </div>
  )
}

export default SinglePet
