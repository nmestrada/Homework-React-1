/* eslint-env mocha */
import React from "react"
import { render, cleanup, fireEvent, waitForElement } from "@testing-library/react"
import { assert } from "chai"

import Root from "../src/components/Root"
import { mock } from "./setup"

/**
 * Tier 2 is about
 * - fetching data from
 */

describe("Root component", () => {
  afterEach(cleanup)

  it("fetches data from /api/pets when Root first mounts", async () => {
    const allThings = render(<Root />)

    return waitForElement(() => {
      console.log(
        // Object.keys(mock)
        mock.history.get
      )
      // assert()
    })
  })

  it("some test", () => {})
  it("some test", () => {})
  it("some test", () => {})
})
