import React, { useState } from "react"

// React Hooks Component
const SinglePet = props => {
  const { name, description } = props.pet
  const [counter, setCounter] = useState(0)
  return (
    <>
      <div className="single-pet">
        <h2>{name}</h2>
        <div>Description: {description}</div>
        <hr />
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <div>Counter: {counter}</div>
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
