// You do not need to edit this file!

// The regenerator runtime allows us to use async await, even in browsers that
// do not support it. For more details, see:
// https://babeljs.io/docs/en/babel-polyfill#docsNav, and
// https://github.com/tc39/ecmascript-asyncawait
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
