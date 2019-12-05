import React from "react"

const SinglePet = props => {
  const { name, description } = props.pet
  return (
    <>
      <div className="single-pet">
        <h2>{name}</h2>
        <div>Description: {description}</div>
        <hr />
        <div>Favorite foods:</div>
        <ul>
          <li>Fancy Feast: Salmon Pâté</li>
          <li>Fancy Feast: Chicken Liver Pâté</li>
          <li>Tuna straight from the can</li>
          <li>Shoelaces</li>
        </ul>
      </div>
    </>
  )
}

export default SinglePet
