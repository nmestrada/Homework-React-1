import React, { useState } from "react"

// React Hooks Component
const SinglePet = props => {
  const { name, description, favoriteFoods } = props.pet
  const [adopted, setAdopted] = useState(false)
  const [displayFavFoods, setDisplayFavFoods] = useState(false)
  return (
    <div className="single-pet">
      <h2>{name}</h2>
      <div>Description: {description}</div>
      <hr />
      <div>{adopted ? "Adopted!" : "Available for Adoption"}</div>
      <button onClick={() => setAdopted(!adopted)}>Toggle Adopted</button>
      <button onClick={() => setDisplayFavFoods(!displayFavFoods)}>
        Show/Hide Favorite Foods
      </button>
      {displayFavFoods && favoriteFoods && favoriteFoods.length ? (
        <>
          <div>{name} likes to eat:</div>
          <ul>
            {favoriteFoods.map(favFood => {
              return <li key={favFood}>{favFood}</li>
            })}
            {/* <li>Fancy Feast: Chicken Liver Pâté</li>
              <li>Tuna straight from the can</li>
              <li>Shoelaces</li> */}
          </ul>
        </>
      ) : ''}
    </div>
  )
}

export default SinglePet

// React Class Component
// class SinglePet extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       counter: 0
//     }
//     this.increment = this.increment.bind(this)
//   }
//   increment() {
//     this.setState(prevState => ({ counter: prevState.counter + 1 }))
//   }

//   render() {
//     const { name, description } = this.props.pet
//     return (
//       <>
//         <div className="single-pet">
//           <h2>{name}</h2>
//           <div>Description: {description}</div>
//           <hr />
//           <button onClick={this.increment}>Increment</button>
//           <div>Counter: {this.state.counter}</div>
//           <div>Favorite foods:</div>
//           <ul>
//             <li>Fancy Feast: Salmon Pâté</li>
//             <li>Fancy Feast: Chicken Liver Pâté</li>
//             <li>Tuna straight from the can</li>
//             <li>Shoelaces</li>
//           </ul>
//         </div>
//       </>
//     )
//   }
// }
