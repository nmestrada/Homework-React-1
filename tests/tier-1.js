/* eslint-env mocha */
import React from "react"
import { render, cleanup, fireEvent } from "@testing-library/react"
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

  const franky = {
    name: "Franky",
    description: "Small black cat who loves to stick his head in cups",
    favoriteFoods: [
      "Leaves",
      "Friskies: Poultry and Gravy",
      "Fancy Feast: Salmon Pâté"
    ]
  }

  it("renders pet.name and pet.description passed in as props", () => {
    const { getByText } = render(<SinglePet pet={rigatoni} />)
    const name = getByText("Rigatoni")
    const description = getByText(content =>
      content.includes("A flaming hot cheetoh in feline form")
    )
    assert.isNotNull(name)
    assert.isNotNull(description)
  })

  it("renders different name and description if passed different props", () => {
    const { getByText } = render(<SinglePet pet={franky} />)
    const name = getByText("Franky")
    const description = getByText(content =>
      content.includes("Small black cat who loves to stick his head in cups")
    )
    assert.isNotNull(name)
    assert.isNotNull(description)
  })

  it("has some state", () => {
    const { getByText } = render(<SinglePet pet={franky} />)
    const counterBefore = getByText("Counter: 0")
    fireEvent.click(getByText("Increment"))
    const counterAfter = getByText("Counter: 1")
    assert.isNotNull(counterBefore)
    assert.isNotNull(counterAfter)
  })
})
