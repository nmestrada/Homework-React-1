/* eslint-env mocha */
import React from "react"
import { render, cleanup, fireEvent } from "@testing-library/react"
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
      description: "Might eat your couch",
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
    const options = [...select.querySelectorAll("option")].map(n => n.value)
    assert.lengthOf(options, 3)
    assert.includeMembers(options, ["all", "cats", "dogs"])
  })

  it("when the filter is set to 'cats', only render SinglePets with cats", () => {
    const { queryByTestId, getByText, queryByText } = render(
      <PetList pets={pets} />
    )
    const select = queryByTestId("species-filter")
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
    const select = queryByTestId("species-filter")
    fireEvent.change(select, { target: { value: "dogs" } })

    assert.equal(select.value, "dogs")
    getByText("Cody", { exact: false })
    getByText("Anabelle", { exact: false })
    assert.isNull(queryByText("Rigatoni", { exact: false }))
    assert.isNull(queryByText("Frankie", { exact: false }))
  })
})
