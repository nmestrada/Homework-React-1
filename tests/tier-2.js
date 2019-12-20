/* eslint-env mocha */
import React from "react"
import { render, cleanup, fireEvent } from "@testing-library/react"
import { assert } from "chai"

import PetList from "../src/components/PetList"

/**
 * Tier 2 is about
 * - rendering a list
 * - handling a change event from a select
 * - setting state (string)
 * - filter a list of rendered components
 */

/** Instructions:
 * Edit the PetList component in src/components/PetList.js
 * It will be passed an array of pet objects as props.pets
 * Pass each pet to a SinglePet component as a prop
 * Create a dropdown that allows the user to select between three options:
 * - all (the default option)
 * - cats
 * - dogs
 * When the user selects a new option, set state accordingly
 * If the selected option is "all", render all the pets
 * If the selected option is "cats", render only the cats
 * If the selected option is "dogs", render only the dogs
 */

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
      description: "Might eat your couch",
      species: "dog"
    }
  ]

  xit("renders a list of SinglePets", () => {
    const { getByText } = render(<PetList pets={pets} />)
    getByText("Rigatoni", { exact: false })
    getByText("Cody", { exact: false })
    getByText("Frankie", { exact: false })
    getByText("Anabelle", { exact: false })
  })

  it("renders a select dropdown with three options: all, cats, dogs", () => {
    const { queryByTestId } = render(<PetList pets={pets} />)
    const select = queryByTestId("species-filter").querySelector("select")
    const options = [...select.querySelectorAll("option")].map(n => n.value)
    assert.lengthOf(options, 3)
    assert.includeMembers(options, ["all", "cats", "dogs"])
  })

  it("when the filter is set to 'cats', only render SinglePets with cats", () => {
    const { queryByTestId, getByText, queryByText } = render(
      <PetList pets={pets} />
    )
    const select = queryByTestId("species-filter").querySelector("select")
    fireEvent.change(select, { target: { value: "cats" } })

    assert.equal(select.value, "cats")
    getByText("Rigatoni", { exact: false })
    getByText("Frankie", { exact: false })
    assert.isNull(queryByText("Cody", { exact: false }))
    assert.isNull(queryByText("Anabelle", { exact: false }))
  })

  it("when the filter is set to 'dogs', only render SinglePets with dogs", () => {
    const { queryByTestId, getByText, queryByText } = render(
      <PetList pets={pets} />
    )
    const select = queryByTestId("species-filter").querySelector("select")
    fireEvent.change(select, { target: { value: "dogs" } })

    assert.equal(select.value, "dogs")
    getByText("Cody", { exact: false })
    getByText("Anabelle", { exact: false })
    assert.isNull(queryByText("Rigatoni", { exact: false }))
    assert.isNull(queryByText("Frankie", { exact: false }))
  })
})
