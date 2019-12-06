/* eslint-env mocha */
import React from "react"
import { render, cleanup } from "@testing-library/react"
import { assert } from "chai"

import PetList from "../src/components/PetList"

describe("PetList component", () => {
  afterEach(cleanup)

  const pets = [
    {
      name: "Rigatoni",
      description: "A flaming hot cheetoh in feline form",
      species: "cat",
      favoriteFoods: [
        "Fancy Feast: Salmon Pâté",
        "Fancy Feast: Chicken Liver Pâté",
        "Tuna straight from the can",
        "Shoelaces"
      ]
    },
    {
      name: "Frankie",
      description: "Small black cat who loves to stick his head in cups",
      species: "cat",
      favoriteFoods: [
        "Leaves",
        "Friskies: Poultry and Gravy",
        "Fancy Feast: Salmon Pâté"
      ]
    },
    {
      name: "Cody",
      species: "dog",
      description: "Adorable pug who loves to hug"
    },
    {
      name: "Anabelle",
      species: "dog",
      description: "Completely apathetic towards anyone but her owner"
    }
  ]

  it("renders a list of SinglePets", () => {
    const { queryByText } = render(<PetList pets={pets} />)
    const foundRigatoni = queryByText("Rigatoni")
    const foundFrankie = queryByText("Frankie")
    const foundCody = queryByText("Cody")
    const foundAnabelle = queryByText("Anabelle")
    assert.isNotNull(foundRigatoni)
    assert.isNotNull(foundFrankie)
    assert.isNotNull(foundCody)
    assert.isNotNull(foundAnabelle)
  })
})
