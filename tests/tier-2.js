/* eslint-env mocha */
import React from "react"
import { render, cleanup } from "@testing-library/react"
import { assert } from "chai"

import PetList from "../src/components/PetList"

describe("PetList component", () => {
  afterEach(cleanup)

  const pets = [
    {
      name: "Rigatoni",
      description: "A flaming hot cheetoh in feline form",
      species: "cat"
    },
    {
      name: "Cody",
      description: "Adorable pug who loves to hug",
      species: "dog"
    },
    {
      name: "Frankie",
      description: "The snuggliest kitty",
      species: "cat"
    },
    {
      name: "Anabelle",
      description: "Might each your couch",
      species: "dog"
    }
  ]

  it("renders a list of SinglePets", () => {
    const { getByText } = render(<PetList pets={pets} />)
    getByText("Rigatoni", { exact: false })
    getByText("Cody", { exact: false })
    getByText("Frankie", { exact: false })
    getByText("Anabelle", { exact: false })
  })

  it("renders a select dropdown with three options: all, cats, dogs", () => {
    const { queryByTestId } = render(<PetList pets={pets} />)
    const select = queryByTestId("species-filter")
    const options = [...select.querySelectorAll("option")].map(n => n.innerHTML)
    assert.lengthOf(options, 3)
    assert.includeMembers(options, ["all", "cats", "dogs"])
  })
})
