/* eslint-env mocha */
import React from "react"
import { mount } from "enzyme"
import { expect } from "chai"

import AddPet from "../src/components/AddPet"
import { valueOf } from "./utils"
import { mockAxios } from "./setup"
import waitForExpect from "wait-for-expect"

const postRequests = () => mockAxios.history.post

/**
 * Tier 4 is about
 * - capturing text input
 * - form field attributes
 *   - name
 *   - placeholder
 *   - onChange
 *   - value
 * - posting data to a server
 * - clearing a form after submitting it
 */

/** Instructions:
 * Edit the Root component in src/components/AddPet.js
 */

describe("Tier 4: AddPet component", () => {
  const snoopy = {
    name: "Snoopy",
    description: "Licensed pilot",
    species: "dog"
  }
  beforeEach(() => {
    mockAxios.onPost("/api/pets", snoopy).reply(201, snoopy)
  })
  afterEach(() => mockAxios.reset())

  // Remember to put the `name` attribute on all your inputs
  // (HINT: name="name" and name="description")
  it("renders two text inputs, name and description, with appropriate placeholders", () => {
    const wrapper = mount(<AddPet />)
    const textInputs = wrapper.find("input")
    expect(textInputs).to.have.length(2)
    const nameInput = wrapper.find('input[name="name"]')
    const descriptionInput = wrapper.find('input[name="description"]')
    expect(nameInput.getDOMNode().placeholder).to.equal("Name")
    expect(descriptionInput.getDOMNode().placeholder).to.equal("Description")
  })

  // You should also put the `name` attribute on your select
  // (HINT: name="species")
  it("renders a select (dropdown menu) with two options: cat and dog", () => {
    const wrapper = mount(<AddPet />)
    const select = wrapper.find('select[name="species"]')
    const options = select.find("option")
    expect(options).to.have.lengthOf(2)
    const optionValues = options.map(option => valueOf(option))
    expect(optionValues).to.include.members(["cat", "dog"])
  })

  it("submitting the form posts the new pet data to /api/pets", async () => {
    const wrapper = mount(<AddPet refetch={() => {}} />)
    const form = wrapper.find("form")
    const select = wrapper.find("select")
    const nameInput = wrapper.find('input[name="name"]')
    const descriptionInput = wrapper.find('[placeholder="Description"]')

    // Simulate a user typing "Snoopy" into the name input
    nameInput.simulate("change", {
      target: {
        name: "name",
        value: "Snoopy"
      }
    })

    // Simulate a user typing "Licensed pilot" into the description input
    descriptionInput.simulate("change", {
      target: {
        name: "description",
        value: "Licensed pilot"
      }
    })

    // Simulate a user clicking the dropdown menu and selecting "dog"
    select.simulate("change", {
      target: {
        name: "species",
        value: "dog"
      }
    })

    // Submit the form!
    form.simulate("submit")

    await waitForExpect(() => {
      expect(postRequests()).to.have.lengthOf(1)

      // What request body did the server receive? Let's find out!
      const postRequestBody = JSON.parse(postRequests()[0].data)
      expect(postRequestBody).to.deep.equal(snoopy)
    })
  })

  it("resets the form after form submission", async () => {
    const wrapper = mount(<AddPet refetch={() => {}} />)
    const form = wrapper.find("form")
    const select = wrapper.find("select")
    const nameInput = wrapper.find('input[name="name"]')
    const descriptionInput = wrapper.find('[placeholder="Description"]')

    // Simulate a user typing "Snoopy" into the name input
    nameInput.simulate("change", {
      target: {
        name: "name",
        value: "Snoopy"
      }
    })

    // Simulate a user typing "Licensed pilot" into the description input
    descriptionInput.simulate("change", {
      target: {
        name: "description",
        value: "Licensed pilot"
      }
    })

    // Simulate a user clicking the dropdown menu and selecting "dog"
    select.simulate("change", {
      target: {
        name: "species",
        value: "dog"
      }
    })

    // Before submitting the form, we expect the form to contain our data
    expect(wrapper.html()).to.contain("Snoopy")
    expect(wrapper.html()).to.contain("Licensed pilot")

    // Submit the form!
    form.simulate("submit")

    await waitForExpect(() => {
      wrapper.update()

      // After submitting the form, we expect the form to be reset to default
      expect(wrapper.html()).to.not.contain("Snoopy")
      expect(wrapper.html()).to.not.contain("Licensed pilot")
    })
  })
})
