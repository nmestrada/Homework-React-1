/* eslint-env mocha */
import React from "react"
import { render, cleanup, wait, fireEvent } from "@testing-library/react"
import { assert } from "chai"

import AddPet from "../src/components/AddPet"
import { mockAxios } from "./setup"

/**
 * Tier 4 is about
 * - posting data to a server
 */

/** Instructions:
 * Edit the Root component in src/components/AddPet.js
 */

describe("Tier 4: AddPet component", () => {
  afterEach(cleanup)
  afterEach(mockAxios.reset)

  it("renders two text inputs, name and description, with appropriate placeholders", () => {
    const { getByTestId } = render(<AddPet />)
    const form = getByTestId("add-pet")

    const nameInput = form.querySelector('input[name="name"]')
    assert.isNotNull(nameInput)
    assert.equal(nameInput.placeholder, "Name")

    const descriptionInput = form.querySelector('input[name="description"]')
    assert.isNotNull(descriptionInput)
    assert.equal(descriptionInput.placeholder, "Description")
  })

  it("renders a select dropdown with two options: cat and dog", () => {
    const { getByTestId } = render(<AddPet />)
    const form = getByTestId("add-pet")

    const speciesSelect = form.querySelector("select")
    assert.isNotNull(speciesSelect)
    const optionsValues = [...speciesSelect.querySelectorAll("option")].map(
      option => option.value
    )
    assert.includeMembers(optionsValues, ["cat", "dog"])
  })

  // TODO: Revisit this test for clarity
  it("submitting the form posts the new pet data to /api/pets", async () => {
    const lucky = {
      name: "Lucky",
      description: "Labradoodle who loves to chase squirrels",
      species: "dog"
    }
    mockAxios.onPost("/api/pets", lucky).reply(201, lucky)

    const { container, getByTestId } = render(<AddPet />)
    const form = getByTestId("add-pet")

    const nameInput = form.querySelector('input[name="name"]')
    fireEvent.change(nameInput, {
      target: {
        value: lucky.name
      }
    })

    const descriptionInput = form.querySelector('input[name="description"]')
    fireEvent.change(descriptionInput, {
      target: {
        value: lucky.description
      }
    })

    const speciesSelect = form.querySelector("select")
    fireEvent.change(speciesSelect, {
      target: {
        value: lucky.species
      }
    })

    let defaultPrevented = null
    container.addEventListener("submit", event => {
      defaultPrevented = event.defaultPrevented
    })
    fireEvent.submit(form)
    await wait(
      () => {
        assert.isTrue(defaultPrevented)
      },
      {
        timeout: 10,
        interval: 5
      }
    )
  })

  // TODO: Write this test
  it("submitting the form posts the new pet data to /api/pets", () => {})

  // TODO: Write this test
  it("clears the form after submission", () => {})

  // TODO: Write this test
  it("BONUS: re-fetches the list of pets after form submission", () => {})
})
