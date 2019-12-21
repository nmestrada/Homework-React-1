/* eslint-env mocha */
import React from "react"
import { render, cleanup, wait } from "@testing-library/react"
import { assert } from "chai"

import Root from "../src/components/Root"
import { mockAxios } from "./setup"

const getRequests = () => mockAxios.history.get.length
// const postRequests = () => mockAxios.history.post.length
// const deleteRequests = () => mockAxios.history.delete.length
// const putRequests = () => mockAxios.history.put.length

/**
 * Tier 2 is about
 * - fetching data from a server
 * -
 */

describe("Root component", () => {
  afterEach(cleanup)
  afterEach(mockAxios.reset)

  xit("fetches data from /api/pets once after Root first mounts", async () => {
    render(<Root />)

    assert.equal(getRequests(), 0)
    await wait(
      () => {
        assert.equal(getRequests(), 1)
      },
      { timeout: 10, interval: 5 }
    )
  })

  xit("renders PetList with data retrieved from /api/pets", async () => {
    const samplePets = [
      {
        name: "Rigatoni",
        description: "A flaming hot cheetoh in feline form",
        species: "cat"
      },
      {
        name: "Cody",
        description: "Adorable pug who loves to hug",
        species: "dog"
      }
    ]
    mockAxios.onGet("/api/pets").reply(200, samplePets)
    const { getByText } = render(<Root />)

    await wait(
      () => {
        getByText("Rigatoni", { exact: false })
        getByText("Cody", { exact: false })
        assert.throws(() => getByText("Frankie", { exact: false }))
        assert.throws(() => getByText("Anabelle", { exact: false }))
        assert.throws(() =>
          getByText("Request failed with status code 500", { exact: false })
        )
      },
      { timeout: 10, interval: 5 }
    )
  })

  xit("renders PetList with DIFFERENT data retrieved from /api/pets", async () => {
    const samplePets = [
      {
        name: "Frankie",
        description: "The snuggliest kitty",
        species: "cat"
      },
      {
        name: "Anabelle",
        description: "Might eat your couch",
        species: "dog"
      }
    ]
    mockAxios.onGet("/api/pets").reply(200, samplePets)
    const { getByText } = render(<Root />)

    await wait(
      () => {
        getByText("Frankie", { exact: false })
        getByText("Anabelle", { exact: false })
        assert.throws(() => getByText("Rigatoni", { exact: false }))
        assert.throws(() => getByText("Cody", { exact: false }))
        assert.throws(() =>
          getByText("Request failed with status code 500", { exact: false })
        )
      },
      { timeout: 10, interval: 5 }
    )
  })

  xit("displays error message if the server responds with status code 500", async () => {
    mockAxios.onGet("/api/pets").reply(500)
    const { getByText } = render(<Root />)

    await wait(
      () => {
        getByText("Request failed with status code 500", { exact: false })
        assert.throws(() => getByText("Rigatoni", { exact: false }))
      },
      { timeout: 10, interval: 5 }
    )
  })
})
