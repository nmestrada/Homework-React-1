/* eslint-env mocha */
import React from "react"
import { render, cleanup } from "@testing-library/react"
import { assert } from "chai"

import SinglePet from "../src/components/SinglePet"

describe("SinglePet component", () => {
  afterEach(cleanup)

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

  it("renders pet.name and pet.description passed in as props", () => {
    const { getByText, getAllByText } = render(<SinglePet pet={rigatoni} />)
    const name = getByText("Rigatoni")
    const description = getAllByText(content => {
      return content.includes("A flaming hot cheetoh in feline form")
    })
    assert.isNotNull(name)
    assert.lengthOf(description, 1)
  })
})
