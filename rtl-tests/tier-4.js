/* eslint-env mocha */
import React from "react"
import { render, cleanup, wait, fireEvent } from "@testing-library/react"
import { assert } from "chai"

import AddPet from "../src/components/AddPet"
import { mockAxios } from "./setup"

const postRequests = () => mockAxios.history.post.length

/**
 * Tier 4 is about
 * - posting data to a server
 */

/** Instructions:
 * Edit the Root component in src/components/AddPet.js
 */

describe("Tier 4: AddPet component", () => {
  afterEach(cleanup)
  afterEach(() => mockAxios.reset())

  it("renders two text inputs, name and description, with appropriate placeholders", () => {
    const { getByTestId } = render(<AddPet refetch={() => {}} />)
    const form = getByTestId("add-pet")

    const nameInput = form.querySelector('input[name="name"]')
    assert.isNotNull(nameInput)
    assert.equal(nameInput.placeholder, "Name")

    const descriptionInput = form.querySelector('input[name="description"]')
    assert.isNotNull(descriptionInput)
    assert.equal(descriptionInput.placeholder, "Description")
  })

  it("renders a select dropdown with two options: cat and dog", () => {
    const { getByTestId } = render(<AddPet refetch={() => {}} />)
    const form = getByTestId("add-pet")

    const speciesSelect = form.querySelector("select")
    assert.isNotNull(speciesSelect)
    const optionsValues = [...speciesSelect.querySelectorAll("option")].map(
      option => option.value
    )
    assert.includeMembers(optionsValues, ["cat", "dog"])
  })

  it("prevents default form submission behavior", async () => {
    mockAxios.onPost("/api/pets").reply(201)

    const { container, getByTestId } = render(<AddPet refetch={() => {}} />)
    const form = getByTestId("add-pet")

    const nameInput = form.querySelector('input[name="name"]')
    fireEvent.change(nameInput, { target: { value: "Toby" } })

    const descriptionInput = form.querySelector('input[name="description"]')
    fireEvent.change(descriptionInput, { target: { value: "Cute pupper" } })

    const speciesSelect = form.querySelector("select")
    fireEvent.change(speciesSelect, { target: { value: "dog" } })

    let defaultPrevented = null
    container.addEventListener("submit", event => {
      defaultPrevented = event.defaultPrevented
    })

    fireEvent.submit(form)

    await wait(
      () => {
        assert.isTrue(defaultPrevented)
      },
      { timeout: 10, interval: 5 }
    )
  })

  it("submitting the form posts the new pet data to /api/pets", async () => {
    const lucky = {
      name: "Lucky",
      description: "Labradoodle who loves to chase squirrels",
      species: "dog"
    }
    mockAxios.onPost("/api/pets", lucky).reply(201, lucky)

    const { getByTestId } = render(<AddPet refetch={() => {}} />)
    const form = getByTestId("add-pet")

    const nameInput = form.querySelector('input[name="name"]')
    fireEvent.change(nameInput, { target: { value: lucky.name } })

    const descriptionInput = form.querySelector('input[name="description"]')
    fireEvent.change(descriptionInput, { target: { value: lucky.description } })

    const speciesSelect = form.querySelector("select")
    fireEvent.change(speciesSelect, { target: { value: lucky.species } })

    fireEvent.submit(form)

    await wait(
      () => {
        assert.equal(postRequests(), 1)
        const postRequestBody = JSON.parse(mockAxios.history.post[0].data)
        assert.deepEqual(postRequestBody, lucky)
      },
      { timeout: 10, interval: 5 }
    )
  })

  it("resets the form after form submission", async () => {
    const lucky = {
      name: "Lucky",
      description: "Labradoodle who loves to chase squirrels",
      species: "dog"
    }
    mockAxios.onPost("/api/pets", lucky).reply(201, lucky)

    const { getByTestId } = render(<AddPet refetch={() => {}} />)
    const form = getByTestId("add-pet")

    const nameInput = form.querySelector('input[name="name"]')
    fireEvent.change(nameInput, { target: { value: lucky.name } })

    const descriptionInput = form.querySelector('input[name="description"]')
    fireEvent.change(descriptionInput, { target: { value: lucky.description } })

    const speciesSelect = form.querySelector("select")
    fireEvent.change(speciesSelect, { target: { value: lucky.species } })

    fireEvent.submit(form)

    await wait(
      () => {
        assert.equal(nameInput.value, "")
        assert.equal(descriptionInput.value, "")
        assert.equal(speciesSelect.value, "cat")
      },
      { timeout: 10, interval: 5 }
    )
  })

  // Assume for now that AddPet is a child of Root...
  // it("BONUS: calls props.refetch after form submission", async () => {
  //   const refetch = spy()
  //   const { getByTestId } = render(<AddPet refetch={refetch} />)

  //   const lucky = {
  //     name: "Lucky",
  //     description: "Labradoodle who loves to chase squirrels",
  //     species: "dog"
  //   }
  //   mockAxios.onPost("/api/pets", lucky).reply(201, lucky)
  //   const form = getByTestId("add-pet")

  //   const nameInput = form.querySelector('input[name="name"]')
  //   fireEvent.change(nameInput, { target: { value: lucky.name } })

  //   const descriptionInput = form.querySelector('input[name="description"]')
  //   fireEvent.change(descriptionInput, {
  //     target: { value: lucky.description }
  //   })

  //   const speciesSelect = form.querySelector("select")
  //   fireEvent.change(speciesSelect, { target: { value: lucky.species } })

  //   fireEvent.submit(form)

  //   await wait(
  //     () => {
  //       assert.isTrue(refetch.called)
  //     },
  //     { timeout: 10, interval: 5 }
  //   )
  // })

  // it("BONUS: Root refetches list of pets after form submission", async () => {
  //   const { getByTestId } = render(<Root />)

  //   const lucky = {
  //     name: "Lucky",
  //     description: "Labradoodle who loves to chase squirrels",
  //     species: "dog"
  //   }
  //   mockAxios.onPost("/api/pets", lucky).reply(201, lucky)
  //   const form = getByTestId("add-pet")

  //   const nameInput = form.querySelector('input[name="name"]')
  //   fireEvent.change(nameInput, { target: { value: lucky.name } })

  //   const descriptionInput = form.querySelector('input[name="description"]')
  //   fireEvent.change(descriptionInput, {
  //     target: { value: lucky.description }
  //   })

  //   const speciesSelect = form.querySelector("select")
  //   fireEvent.change(speciesSelect, { target: { value: lucky.species } })

  //   fireEvent.submit(form)

  //   await wait(
  //     () => {
  //       assert.equal(getRequests(), 2)
  //     },
  //     { timeout: 10, interval: 5 }
  //   )
  // })

  // // TODO: Write this one maybe.
  // it("BONUS: handles errors gracefully", async () => {})
})
