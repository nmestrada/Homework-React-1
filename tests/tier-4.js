/* eslint-env mocha */
import React from "react"
import { render, cleanup, wait } from "@testing-library/react"
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

  it("renders a select dropdown with two options: cat and dog", async () => {})

  it("submitting the form POSTs the new pet data to /api/pets", async () => {})

  it("prevents default form submission behavior", async () => {})

  it("clears the form after submission", async () => {})

  it("BONUS: re-fetches the list of pets after form submission", async () => {})
})
