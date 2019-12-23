/* eslint-env mocha */
import React from "react"
import { render, cleanup, wait } from "@testing-library/react"
import { assert } from "chai"

// import Root from "../src/components/Root"
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

  it("a test", async () => {})

  it("a test", async () => {})

  it("a test", async () => {})

  it("a test", async () => {})
})
