/* eslint-env mocha */
import React from "react"
import { expect } from "chai"
import { mount } from "enzyme"
import waitForExpect from "wait-for-expect"
import Root from "../src/components/Root"
// import SinglePet from "../src/components/SinglePet"
import DeletePet from "../src/components/DeletePet"
import { mockAxios } from "./setup"

// TODO: Not sure if we should enforce / encourage separating this
// out into a separate DeletePet component or allow them to put the logic
// in SinglePet.
//
// Leaning towards making them use a separate component....

describe("Tier 4: DeletePet component", () => {
  it("one", () => {})
  it("two", () => {})
  it("three", () => {})
})
