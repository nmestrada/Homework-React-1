/* eslint-env mocha */
import React from "react"
import { render, cleanup, wait, fireEvent } from "@testing-library/react"
import { assert } from "chai"
import { spy } from "sinon"

import AddPet from "../src/components/AddPet"
import Root from "../src/components/Root"
import { mockAxios } from "./setup"

// const postRequests = () => mockAxios.history.post.length
const getRequests = () => mockAxios.history.get.length

/**
 * Tier 5 is about
 * - refetching data
 * - passing functions down as props
 */

/** Instructions:
 * Edit the Root component in src/components/Root.js
 * Edit the AddPet component in src/components/AddPet.js
 */

describe("Tier 5: refetching data [BONUS]", () => {
  afterEach(cleanup)
  afterEach(() => mockAxios.reset())

  // Assume for now that AddPet is a child of Root...
  it("calls props.refetch after form submission", async () => {
    const refetch = spy()
    const { getByTestId } = render(<AddPet refetch={refetch} />)

    const lucky = {
      name: "Lucky",
      description: "Labradoodle who loves to chase squirrels",
      species: "dog"
    }
    mockAxios.onPost("/api/pets", lucky).reply(201, lucky)
    const form = getByTestId("add-pet")

    const nameInput = form.querySelector('input[name="name"]')
    fireEvent.change(nameInput, { target: { value: lucky.name } })

    const descriptionInput = form.querySelector('input[name="description"]')
    fireEvent.change(descriptionInput, {
      target: { value: lucky.description }
    })

    const speciesSelect = form.querySelector("select")
    fireEvent.change(speciesSelect, { target: { value: lucky.species } })

    fireEvent.submit(form)

    await wait(
      () => {
        assert.isTrue(refetch.called)
      },
      { timeout: 10, interval: 5 }
    )
  })

  it("Root refetches list of pets after form submission", async () => {
    const { getByTestId } = render(<Root />)

    const lucky = {
      name: "Lucky",
      description: "Labradoodle who loves to chase squirrels",
      species: "dog"
    }
    mockAxios.onPost("/api/pets", lucky).reply(201, lucky)
    const form = getByTestId("add-pet")

    const nameInput = form.querySelector('input[name="name"]')
    fireEvent.change(nameInput, { target: { value: lucky.name } })

    const descriptionInput = form.querySelector('input[name="description"]')
    fireEvent.change(descriptionInput, {
      target: { value: lucky.description }
    })

    const speciesSelect = form.querySelector("select")
    fireEvent.change(speciesSelect, { target: { value: lucky.species } })

    fireEvent.submit(form)

    await wait(
      () => {
        assert.equal(getRequests(), 2)
      },
      { timeout: 10, interval: 5 }
    )
  })

  // TODO: Write this one maybe.
  it("handles errors gracefully", async () => {})
})
