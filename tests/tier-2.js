/* eslint-env mocha */
import React from "react"
import { render, cleanup } from "@testing-library/react"
// import { assert } from "chai"

import PetList from "../src/components/PetList"

describe("PetList component", () => {
  afterEach(cleanup)

  const pets = [
    {
      name: "Rigatoni",
      description: "A flaming hot cheetoh in feline form",
      species: "cat"
    },
    {
      name: "Cody",
      description: "Adorable pug who loves to hug",
      species: "dog"
    },
    {
      name: "Frankie",
      description: "The snuggliest kitty",
      species: "cat"
    },
    {
      name: "Anabelle",
      description: "Might each your couch",
      species: "dog"
    }
  ]

  it("renders a list of SinglePets", () => {
    const { getByText } = render(<PetList pets={pets} />)
    getByText("Rigatoni", { exact: false })
    getByText("Cody", { exact: false })
    getByText("Frankie", { exact: false })
    getByText("Anabelle", { exact: false })
  })

  // Idea: Give the PetList a <select> to filer pets by species
  // Or maybe just render two different PetLists with a header above each one
  // according to the species

  // Not sure if this test is necessary (or even possible with RTL? ¯\_(ツ)_/¯)
  // it("renders each SinglePets with a unique key", () => {
  //   const allThings = render(<PetList pets={pets} />)
  //   console.log(allThings)
  // })
})
