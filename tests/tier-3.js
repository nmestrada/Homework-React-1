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

/**
 * Tier 2 is about
 * - fetching data from
 */

describe("Root component", () => {
  afterEach(cleanup)
  afterEach(mock.reset)

  it.only("fetches data from /api/pets when Root first mounts", async () => {
    render(<Root />)
    await wait(
      () => {
        assert.equal(mock.history.get.length, 1)
      },
      { timeout: 10, interval: 5 }
    )
  })

  it("some test", () => {})
  it("some test", () => {})
  it("some test", () => {})
})
