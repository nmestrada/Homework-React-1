// You do not need to edit this file!
import "core-js/stable"
import "regenerator-runtime/runtime"

import React from "react"
import ReactDOM from "react-dom"
import SinglePet from "./components/SinglePet"

const App = () => {
  return (
    <>
      <h1>Hello World</h1>
      <SinglePet />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
