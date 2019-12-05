/* eslint-env mocha */
import React from "react"
import { render } from "@testing-library/react"

import SinglePet from "../src/components/SinglePet"

describe("SinglePet component", () => {
  const rigatoni = {
    name: "Rigatoni",
    description: "A flaming hot cheetoh in feline form",
    favoriteFoods: [
      "Fancy Feast: Salmon Pâté",
      "Fancy Feast: Chicken Liver Pâté",
      "Tuna straight from the can",
      "Shoelaces"
    ]
  }

  it("renders the pet name passed in as props", async () => {
    const { findAllByText, container, baseElement } = render(
      <SinglePet pet={rigatoni} />
    )
    const matching = await findAllByText("Rigatoni")
    console.log("MATCHING", matching.length)
    // console.log(baseElement)
  })
  it("Test 2", () => {
    // throw new Error("Bad things")
  })
})
