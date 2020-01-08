/* eslint-env mocha */
/* eslint-disable no-unused-expressions */
import React from "react"
// import { render, cleanup, fireEvent } from "@testing-library/react"
import { assert, expect } from "chai"
import { mount } from "enzyme"

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

describe("Tier 1: SinglePet component", () => {
  // afterEach(cleanup)

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
    const wrapper = mount(<SinglePet pet={rigatoni} />)
    expect(wrapper.contains(rigatoni.name)).to.equal(true)
    expect(wrapper.contains(rigatoni.description)).to.equal(true)
    expect(wrapper.contains(rigatoni.species)).to.equal(true)
  })

  xit("renders different name, description, and species if passed different props", () => {
    // const { getByText } = render(<SinglePet pet={cody} />)
    // getByText("Cody", { exact: false })
    // getByText("Adorable pug who loves to hug", { exact: false })
    // getByText("dog", { exact: false })
  })

  xit("renders a 'Toggle Adopted' button", () => {
    // The button doesn't need to "do anything" yet. See the next test.
    // const { getByRole } = render(<SinglePet pet={rigatoni} />)
    // const { innerHTML } = getByRole("button")
    // assert.equal(innerHTML, "Toggle Adopted")
  })

  xit("the 'Toggle Adopted' button toggles the pet's adopted status", () => {
    // const { getByText } = render(<SinglePet pet={rigatoni} />)
    // The component should render "Available for adoption" and not "Adopted!"
    // getByText("Available for Adoption", { exact: false })
    // assert.throws(() => getByText("Adopted!", { exact: false }))
    // Click the button!
    // fireEvent.click(getByText("Toggle Adopted"))
    // // NOW the component should render "Adopted!"
    // getByText("Adopted!", { exact: false })
    // assert.throws(() => getByText("Available for adoption", { exact: false }))
  })
})
