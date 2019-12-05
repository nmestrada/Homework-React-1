// You do not need to edit this file!
import "core-js/stable"
import "regenerator-runtime/runtime"

import React from "react"
import ReactDOM from "react-dom"
import SinglePet from "./components/SinglePet"

const rigatoni = {
  name: "Rigatoni",
  description: "A flaming hot cheetoh in feline form",
  favoriteFoods: [
    "Fancy Feast: Salmon Pâté",
    "Fancy Feast: Chicken Liver Pâté",
    "Tuna straight from the can",
    "Shoelaces"
  ]
}

const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <SinglePet pet={rigatoni} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
