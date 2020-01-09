/* eslint-env mocha */
import React from "react"
import { expect } from "chai"
import { mount, render } from "enzyme"
import waitForExpect from "wait-for-expect"
import Root from "../src/components/Root"
import { mockAxios } from "./setup"

const getRequests = () => mockAxios.history.get.length

/**
 * Tier 3 is about
 * - fetching data from a server
 * - using React lifecycle (componentDidMount or useEffect)
 * - setting state (array) from the server's response
 * - setting state (error object) if the server replies with a 500 status code
 */

/** Instructions:
 * Edit the Root component in src/components/Root.js
 * Once the component mounts, use axios to make a GET request to /api/pets
 * NOTE: You do not need to edit the express server for any of these tests
 * Pass the pet data as a prop called `pets` to PetList
 * Root should only make one GET request, not every time it renders
 * If an error occurs, display the error message and don't render any pets
 * While the data is loading, display a simple "Loading" message
 */

describe("Tier 3: Root component", () => {
  afterEach(() => mockAxios.reset())

  it("fetches data from /api/pets once after Root first mounts", async () => {
    expect(getRequests()).to.equal(0)
    mount(<Root />)
    await waitForExpect(() => {
      expect(getRequests()).to.equal(1)
    })
  })

  it("renders PetList with data retrieved from /api/pets", async () => {
    const samplePets = [
      {
        name: "Rigatoni",
        description: "A flaming hot cheetoh in feline form",
        species: "cat"
      },
      {
        name: "Cody",
        description: "Adorable pug who loves to hug",
        species: "dog"
      }
    ]
    mockAxios.onGet("/api/pets").reply(200, samplePets)

    const wrapper = mount(<Root />)
    await waitForExpect(() => {
      expect(wrapper.text()).to.contain("Rigatoni")
      expect(wrapper.text()).to.contain("Cody")
      expect(wrapper.text()).to.not.contain("Frankie")
      expect(wrapper.text()).to.not.contain("Anabelle")
    })
  })

  it("displays loading message while waiting for the data", async () => {
    const samplePets = [
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
    mockAxios.onGet("/api/pets").reply(200, samplePets)
    const wrapper = mount(<Root />)
    expect(wrapper.text()).to.contain("Loading")
    await waitForExpect(() => {
      wrapper.update()
      expect(wrapper.text()).to.not.contain("Loading")
      expect(wrapper.text()).to.not.contain("Rigatoni")
      expect(wrapper.text()).to.not.contain("Cody")
      expect(wrapper.text()).to.contain("Frankie")
      expect(wrapper.text()).to.contain("Anabelle")
    })

    // const { getByText } = render(<Root />)
    // getByText("Loading", { exact: false })
    // await wait(
    //   () => {
    //     assert.throws(() => getByText("Loading", { exact: false }))
    //     getByText("Frankie", { exact: false })
    //     getByText("Anabelle", { exact: false })
    //     assert.throws(() => getByText("Rigatoni", { exact: false }))
    //     assert.throws(() => getByText("Cody", { exact: false }))
    //     assert.throws(() =>
    //       getByText("Request failed with status code 500", { exact: false })
    //     )
    //   },
    //   { timeout: 10, interval: 5 }
    // )
  })

  xit("displays error message if the server responds with status code 500", async () => {
    // mockAxios.onGet("/api/pets").reply(500)
    // const { getByText } = render(<Root />)
    // await wait(
    //   () => {
    //     getByText("Request failed with status code 500", { exact: false })
    //     assert.throws(() => getByText("Rigatoni", { exact: false }))
    //   },
    //   { timeout: 10, interval: 5 }
    // )
  })
})
