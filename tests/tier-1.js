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

  it("renders a 'Toggle Adopted' button", () => {
    // This button doesn't need to do anything yet. See the next test...
    const { getByRole } = render(<SinglePet pet={rigatoni} />)
    const { innerHTML } = getByRole("button")
    assert.equal(innerHTML, "Toggle Adopted")
  })

  it("the 'Toggle Adopted' button toggles the pet's adopted status", () => {
    const { queryByText } = render(<SinglePet pet={rigatoni} />)

    // The component should render "Available for adoption" and not "Adopted!"
    const availableForAdoptedBefore = queryByText(content =>
      content.includes("Available for adoption")
    )
    const adoptedBefore = queryByText(content => content.includes("Adopted!"))
    assert.isNotNull(availableForAdoptedBefore)
    assert.isNull(adoptedBefore)

    // Now we click the button!
    fireEvent.click(queryByText("Toggle Adopted"))

    // The component should now render "Adopted!" and not "Available for adoption"
    const availableForAdoptedAfter = queryByText(content =>
      content.includes("Available for adoption")
    )
    const adoptedAfter = queryByText(content => content.includes("Adopted!"))
    assert.isNull(availableForAdoptedAfter)
    assert.isNotNull(adoptedAfter)
  })
})
