// You do not need to edit this file!
import "core-js/stable"
import "regenerator-runtime/runtime"

import React from "react"
import ReactDOM from "react-dom"
import SinglePet from "./components/SinglePet"
import pets from "./petdata"

const App = () => {
  const [rigatoni] = pets
  return (
    <>
      <h1>Adoption Center</h1>
      <SinglePet pet={rigatoni} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
