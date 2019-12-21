/* eslint-env mocha */
import React from "react"
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
  wait
} from "@testing-library/react"
import { assert } from "chai"

import Root from "../src/components/Root"
import { mock } from "./setup"

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
  afterEach(mock.reset)

  it("fetches data from /api/pets once Root first mounts", async () => {
    render(<Root />)
    assert.equal(getReqs(mock), 0)
    await wait(
      () => {
        assert.equal(getReqs(mock), 1)
      },
      { timeout: 10, interval: 5 }
    )
  })

  it("renders PetList with the data retrieved from /api/pets", () => {

  })
  it("some test", () => {})
  it("some test", () => {})
})
