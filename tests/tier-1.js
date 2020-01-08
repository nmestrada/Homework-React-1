/* eslint-env mocha */
import React from "react"
// import { render, cleanup, fireEvent } from "@testing-library/react"
import { expect } from "chai"
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

  it("renders different name, description, and species if passed different props", () => {
    const wrapper = mount(<SinglePet pet={cody} />)
    expect(wrapper.contains(cody.name)).to.equal(true)
    expect(wrapper.contains(cody.description)).to.equal(true)
    expect(wrapper.contains(cody.species)).to.equal(true)
  })

  it("renders a 'Toggle Adopted' button", () => {
    // The button doesn't need to "do anything" just yet. See the next test.
    const wrapper = mount(<SinglePet pet={rigatoni} />)
    expect(wrapper.exists("button")).to.equal(true)
    expect(wrapper.find("button").text()).to.equal("Toggle Adopted")
  })

  it("the 'Toggle Adopted' button toggles the pet's adopted status", () => {
    const wrapper = mount(<SinglePet pet={rigatoni} />)
    const toggleAdoptedButton = wrapper.find("button")

    // The component should render "Available for adoption" and not "Adopted!"
    expect(wrapper.contains("Available for adoption")).to.equal(true)
    expect(wrapper.contains("Adopted!")).to.equal(false)

    // Click the button!
    toggleAdoptedButton.simulate("click")

    // NOW the component should render "Adopted!"
    expect(wrapper.contains("Available for adoption")).to.equal(false)
    expect(wrapper.contains("Adopted!")).to.equal(true)
  })
})
