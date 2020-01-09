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
    expect(wrapper.text()).to.contain("Rigatoni")
    expect(wrapper.text()).to.contain("A flaming hot cheetoh in feline form")
    expect(wrapper.text()).to.contain("cat")
  })

  it("renders different name, description, and species if passed different props", () => {
    const wrapper = mount(<SinglePet pet={cody} />)
    expect(wrapper.text()).to.contain("Cody")
    expect(wrapper.text()).to.contain("Adorable pug who loves to hug")
    expect(wrapper.text()).to.contain("dog")
  })

  it("renders a 'Toggle Adopted' button", () => {
    // The button doesn't need to "do anything" just yet. See the next test.
    const wrapper = mount(<SinglePet pet={rigatoni} />)
    expect(wrapper.find("button")).to.have.lengthOf(1)
    expect(wrapper.find("button").text()).to.equal("Toggle Adopted")
  })

  it("the 'Toggle Adopted' button toggles the pet's adopted status", () => {
    const wrapper = mount(<SinglePet pet={rigatoni} />)
    const toggleAdoptedButton = wrapper.find("button")

    // The component should render "Available for adoption" and not "Adopted!"
    expect(wrapper.text()).to.contain("Available for adoption")
    expect(wrapper.text()).to.not.contain("Adopted!")
    // expect(wrapper.contains("Available for adoption")).to.equal(true)
    // expect(wrapper.contains("Adopted!")).to.equal(false)

    // Click the button!
    toggleAdoptedButton.simulate("click")

    // NOW the component should render "Adopted!"
    expect(wrapper.text()).to.not.contain("Available for adoption")
    expect(wrapper.text()).to.contain("Adopted!")
    // expect(wrapper.contains("Available for adoption")).to.equal(false)
    // expect(wrapper.contains("Adopted!")).to.equal(true)
  })
})
