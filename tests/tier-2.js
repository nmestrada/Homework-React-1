/* eslint-env mocha */
import React from "react"
import { render, cleanup } from "@testing-library/react"

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

  xit("renders a list of SinglePets", () => {
    const { getByText } = render(<PetList pets={pets} />)
    getByText("Rigatoni", { exact: false })
    getByText("Frankie", { exact: false })
    getByText("Cody", { exact: false })
    getByText("Anabelle", { exact: false })
  })

})
