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
    adopted: true,
    favoriteFoods: [
      "Fancy Feast: Salmon Pâté",
      "Fancy Feast: Chicken Liver Pâté",
      "Tuna straight from the can",
      "Shoelaces"
    ]
  }

  const frankie = {
    name: "Frankie",
    description: "Small black cat who loves to stick his head in cups",
    adopted: false,
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
    const { getByText } = render(<SinglePet pet={frankie} />)
    const name = getByText("Frankie")
    const description = getByText(content =>
      content.includes("Small black cat who loves to stick his head in cups")
    )
    assert.isNotNull(name)
    assert.isNotNull(description)
  })

  it("renders a button that toggles whether to display the pet's favorite foods", () => {
    const { queryByText } = render(<SinglePet pet={rigatoni} />)
    const favFoodsBefore = queryByText(content => content.includes("Shoelaces"))
    assert.isNull(favFoodsBefore)
    fireEvent.click(queryByText("Show/Hide Favorite Foods"))
    const favFoodsAfter = queryByText(content => content.includes("Shoelaces"))
    assert.isNotNull(favFoodsAfter)
  })

  // TODO: Write a test for handling the possibility of favoriteFoods undefined
})
