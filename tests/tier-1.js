/* eslint-env mocha */
import React from "react"
import { render, cleanup, fireEvent } from "@testing-library/react"
import { assert } from "chai"

import SinglePet from "../src/components/SinglePet"

/**
 * Tier 1 is about
 * - rendering data from props
 * - handling a click event from a button
 * - setting state (boolean)
 */

/** Instructions:
 * Edit the SinglePet component in src/components/SinglePet.js
 * It will be passed a pet object as props.pet
 * A pet object looks like this:
 * {
 *   name: "Some Pet Name"
 *   description: "Describing the pet"
 *   species: either "dog" or "cat"
 * }
 *
 * By default, every pet is not adopted
 * Add a button that, when clicked, toggles the pet's adoption status
 */

describe("SinglePet component", () => {
  afterEach(cleanup)

  const rigatoni = {
    name: "Rigatoni",
    description: "A flaming hot cheetoh in feline form",
    species: "cat"
  }

  const cody = {
    name: "Cody",
    description: "Adorable pug who loves to hug",
    species: "dog"
  }

  it("renders a pet's name, description, and species passed in as props", () => {
    const { getByText } = render(<SinglePet pet={rigatoni} />)
    getByText("Rigatoni", { exact: false })
    getByText("A flaming hot cheetoh in feline form", { exact: false })
    getByText("cat", { exact: false })
  })

  it("renders different name, description, and species if passed different props", () => {
    const { getByText } = render(<SinglePet pet={cody} />)
    getByText("Cody", { exact: false })
    getByText("Adorable pug who loves to hug", { exact: false })
    getByText("dog", { exact: false })
  })

  it("renders a 'Toggle Adopted' button", () => {
    // The button doesn't need to "do anything" yet. See the next test.
    const { getByRole } = render(<SinglePet pet={rigatoni} />)
    const { innerHTML } = getByRole("button")
    assert.equal(innerHTML, "Toggle Adopted")
  })

  it("the 'Toggle Adopted' button toggles the pet's adopted status", () => {
    const { getByText } = render(<SinglePet pet={rigatoni} />)

    // The component should render "Available for adoption" and not "Adopted!"
    getByText("Available for Adoption", { exact: false })
    assert.throws(() => getByText("Adopted!", { exact: false }))

    // Click the button!
    fireEvent.click(getByText("Toggle Adopted"))

    // NOW the component should render "Adopted!"
    getByText("Adopted!", { exact: false })
    assert.throws(() => getByText("Available for adoption", { exact: false }))
  })
})
