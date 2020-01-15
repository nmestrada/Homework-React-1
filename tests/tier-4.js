/* eslint-env mocha */
import React from "react"
import { expect } from "chai"
import { spy } from "sinon"
import { mount } from "enzyme"
import waitForExpect from "wait-for-expect"
import Root from "../src/components/Root"
import DeletePet from "../src/components/DeletePet"
import { mockAxios } from "./setup"

const deleteRequests = () => mockAxios.history.delete

/**
 * Tier 4 is about
 * - handling a click event from a button
 * - sending a delete request to the server
 * - synchronizing client-side state with the server
 */

/** Instructions:
 * Edit the DeleteButton component in src/components/DeleteButton.js
 * Add a click handler to the button
 * In the click handler, send a DELETE request to /api/pets/ID
 * NOTE: DeletePet will be passed petId and handleDelete as a prop
 * After the server confirms the successful deletion, call handleDelete
 *
 * Edit the Root component in src/components/Root.js
 * Add a handleDelete function to Root (it can be empty for now)
 * Pass handleDelete to DeletePet (through PetList and each SinglePet)
 * Root's handleDelete function should do one of two things:
 *   1. Re-fetch the data from the server (e.g. GET /api/pets)
 *   2. Remove the deleted pet from its state (without making a network request)
 * If it all works correctly, you should be able to click "Delete" and the pet
 * will disappear from the list.
 */

describe("Tier 4: DeletePet component", () => {
  afterEach(() => mockAxios.reset())

  it("renders a 'Delete' button", () => {
    const wrapper = mount(<DeletePet petId={1} handleDelete={() => {}} />)

    expect(wrapper.find("button")).to.have.length(1)
    expect(wrapper.containsMatchingElement(<button>Delete</button>)).to.equal(
      true
    )
  })

  it("sends a delete request to /api/pets/:petId when user clicks the button", async () => {
    mockAxios.onDelete("/api/pets/1").reply(204)
    const wrapper = mount(<DeletePet petId={1} handleDelete={() => {}} />)

    expect(deleteRequests()).to.have.lengthOf(0)

    wrapper.simulate("click")

    await waitForExpect(() => {
      expect(deleteRequests()).to.have.lengthOf(1)
    })
  })

  it("calls props.handleDelete if the delete request is successful", async () => {
    mockAxios.onDelete("/api/pets/2").reply(204)
    const handleDeleteSpy = spy()
    const wrapper = mount(
      <DeletePet petId={2} handleDelete={handleDeleteSpy} />
    )

    wrapper.simulate("click")

    await waitForExpect(() => {
      expect(handleDeleteSpy.called).to.equal(true)
    })
  })

  xit("does not call props.handleDelete if the delete request fails", () => {})

  xit("removes the deleted pet", () => {})
})
