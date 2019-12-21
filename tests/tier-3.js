/* eslint-env mocha */
import React from "react"
import { render, cleanup, wait } from "@testing-library/react"
import { assert } from "chai"

import Root from "../src/components/Root"
import { mockAxios } from "./setup"

const getReqs = mockObj => mockObj.history.get.length
// const postReqs = mockObj => mockObj.history.post.length
// const deleteReqs = mockObj => mockObj.history.delete.length
// const putReqs = mockObj => mockObj.history.put.length

/**
 * Tier 2 is about
 * - fetching data from a server
 * -
 */

describe("Root component", () => {
  afterEach(cleanup)
  afterEach(mockAxios.reset)

  it("fetches data from /api/pets once after Root first mounts", async () => {
    render(<Root />)
    assert.equal(getReqs(mockAxios), 0)
    await wait(
      () => {
        assert.equal(getReqs(mockAxios), 1)
      },
      { timeout: 10, interval: 5 }
    )
  })

  it("renders PetList with the data retrieved from /api/pets", async () => {
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
        assert.throws(() => getByText("Anabelle", { exact: false }))
        assert.throws(() => getByText("Frankie", { exact: false }))
      },
      { timeout: 10, interval: 5 }
    )
  })
  it("some test", () => {})
  it("some test", () => {})
})
