/* eslint-env mocha */
import React from "react"
import { expect } from "chai"
import { mount } from "enzyme"
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
    // await wait(() => {
    //   expect(getRequests()).to.equal(20)
    // })

    // setTimeout(() => {
    //   expect(getRequests()).to.equal(1)
    //   done()
    // }, 1)
    // process.nextTick(() => {
    //   process.nextTick(() => {
    //     expect(getRequests()).to.equal(1)

    //   })
    // })
    //   render(<Root />)

    //   await wait(
    //     () => {
    //       assert.equal(getRequests(), 1)
    //     },
    //     { timeout: 10, interval: 5 }
    //   )
  })

  xit("renders PetList with data retrieved from /api/pets", async () => {
    // const samplePets = [
    //   {
    //     name: "Rigatoni",
    //     description: "A flaming hot cheetoh in feline form",
    //     species: "cat"
    //   },
    //   {
    //     name: "Cody",
    //     description: "Adorable pug who loves to hug",
    //     species: "dog"
    //   }
    // ]
    // mockAxios.onGet("/api/pets").reply(200, samplePets)
    // const { getByText } = render(<Root />)

    await wait(
      () => {
        getByText("Rigatoni", { exact: false })
        getByText("Cody", { exact: false })
        assert.throws(() => getByText("Frankie", { exact: false }))
        assert.throws(() => getByText("Anabelle", { exact: false }))
        assert.throws(() =>
          getByText("Request failed with status code 500", { exact: false })
        )
      },
      { timeout: 10, interval: 5 }
    )
  })

  xit("displays loading message while waiting for the data", async () => {
    // const samplePets = [
    //   {
    //     name: "Frankie",
    //     description: "The snuggliest kitty",
    //     species: "cat"
    //   },
    //   {
    //     name: "Anabelle",
    //     description: "Might eat your couch",
    //     species: "dog"
    //   }
    // ]
    // mockAxios.onGet("/api/pets").reply(200, samplePets)
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
