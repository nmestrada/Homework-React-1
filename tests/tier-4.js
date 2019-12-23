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

  it("has two text inputs, name and description, with appropriate placeholders", async () => {
    const { getByPlaceholderText } = render(<AddPet />)

    const nameInput = getByPlaceholderText("Name", { exact: false })
    assert.equal(nameInput.name, "name")
    assert.equal(nameInput.type, "text")
    assert.equal(nameInput.value, "")

    const descriptionInput = getByPlaceholderText("Description", {
      exact: false
    })
    assert.equal(descriptionInput.name, "description")
    assert.equal(descriptionInput.type, "text")
    assert.equal(descriptionInput.value, "")
  })

  it("a test", async () => {})

  it("a test", async () => {})

  it("a test", async () => {})
})
