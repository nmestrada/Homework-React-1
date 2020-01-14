/* eslint-env mocha */
import React from "react"
import { mount } from "enzyme"
import { expect } from "chai"

import AddPet from "../src/components/AddPet"
import { valueOf } from "./utils"
import { mockAxios } from "./setup"
import waitForExpect from "wait-for-expect"

const postRequests = () => mockAxios.history.post

/**
 * Tier 4 is about
 * - capturing text input
 * - form field attributes
 *   - name
 *   - placeholder
 *   - onChange
 *   - value
 * - posting data to a server
 * - clearing a form after submitting it
 */

/** Instructions:
 * Edit the Root component in src/components/AddPet.js
 */

describe("Tier 4: AddPet component", () => {
  afterEach(() => mockAxios.reset())

  // Remember to put the `name` attribute on all your inputs
  it("renders two text inputs, name and description, with appropriate placeholders", () => {
    const wrapper = mount(<AddPet />)
    const textInputs = wrapper.find("input")
    expect(textInputs).to.have.length(2)
    const nameInput = wrapper.find('input[name="name"]')
    const descriptionInput = wrapper.find('input[name="description"]')
    expect(nameInput.getDOMNode().placeholder).to.equal("Name")
    expect(descriptionInput.getDOMNode().placeholder).to.equal("Description")
  })

  it("renders a select dropdown with two options: cat and dog", () => {
    const wrapper = mount(<AddPet />)
    const select = wrapper.find('select[name="species"]')
    const options = select.find("option")
    expect(options).to.have.lengthOf(2)
    const optionValues = options.map(option => valueOf(option))
    expect(optionValues).to.include.members(["cat", "dog"])
  })

  // it("prevents default form submission behavior", async () => {
  //   mockAxios.onPost("/api/pets").reply(201)

  //   const { container, getByTestId } = render(<AddPet refetch={() => {}} />)
  //   const form = getByTestId("add-pet")

  //   const nameInput = form.querySelector('input[name="name"]')
  //   fireEvent.change(nameInput, { target: { value: "Toby" } })

  //   const descriptionInput = form.querySelector('input[name="description"]')
  //   fireEvent.change(descriptionInput, { target: { value: "Cute pupper" } })

  //   const speciesSelect = form.querySelector("select")
  //   fireEvent.change(speciesSelect, { target: { value: "dog" } })

  //   let defaultPrevented = null
  //   container.addEventListener("submit", event => {
  //     defaultPrevented = event.defaultPrevented
  //   })

  //   fireEvent.submit(form)

  //   await wait(
  //     () => {
  //       assert.isTrue(defaultPrevented)
  //     },
  //     { timeout: 10, interval: 5 }
  //   )
  // })

  it("submitting the form posts the new pet data to /api/pets", async () => {
    const snoopy = {
      name: "Snoopy",
      description: "Licensed pilot",
      species: "dog"
    }
    mockAxios.onPost("/api/pets", snoopy).reply(201, snoopy)

    mockAxios.onGet("/api/pets").reply(200, [snoopy])

    const wrapper = mount(<AddPet refetch={() => {}} />)
    const form = wrapper.find("form")
    const select = wrapper.find("select")
    const nameInput = wrapper.find('input[name="name"]')
    const descriptionInput = wrapper.find('[placeholder="Description"]')

    // Simulate a user typing "Snoopy" into the name input
    nameInput.simulate("change", {
      target: {
        name: "name",
        value: "Snoopy"
      }
    })

    // Simulate a user typing "Licensed pilot" into the description input
    descriptionInput.simulate("change", {
      target: {
        name: "description",
        value: "Licensed pilot"
      }
    })

    // Simulate a user clicking the dropdown menu and selecting "dog"
    select.simulate("change", {
      target: {
        name: "species",
        value: "dog"
      }
    })

    form.simulate("submit")

    await waitForExpect(() => {
      expect(postRequests()).to.have.lengthOf(1)

      // What request body did the server receive? Let's find out!
      // const postRequestBody = JSON.parse(postRequests()[0].data)
      const [{ data }] = postRequests()
      const postRequestBody = JSON.parse(data)
      expect(postRequestBody).to.deep.equal(snoopy)
    })

    // const { getByTestId } = render(<AddPet refetch={() => {}} />)
    // const form = getByTestId("add-pet")

    // const nameInput = form.querySelector('input[name="name"]')
    // fireEvent.change(nameInput, { target: { value: lucky.name } })

    // const descriptionInput = form.querySelector('input[name="description"]')
    // fireEvent.change(descriptionInput, { target: { value: lucky.description } })

    // const speciesSelect = form.querySelector("select")
    // fireEvent.change(speciesSelect, { target: { value: lucky.species } })

    // fireEvent.submit(form)

    // await wait(
    //   () => {
    //     assert.equal(postRequests(), 1)
    //     const postRequestBody = JSON.parse(mockAxios.history.post[0].data)
    //     assert.deepEqual(postRequestBody, lucky)
    //   },
    //   { timeout: 10, interval: 5 }
    // )
  })

  xit("resets the form after form submission", async () => {
    // const lucky = {
    //   name: "Lucky",
    //   description: "Labradoodle who loves to chase squirrels",
    //   species: "dog"
    // }
    // mockAxios.onPost("/api/pets", lucky).reply(201, lucky)
    // const { getByTestId } = render(<AddPet refetch={() => {}} />)
    // const form = getByTestId("add-pet")
    // const nameInput = form.querySelector('input[name="name"]')
    // fireEvent.change(nameInput, { target: { value: lucky.name } })
    // const descriptionInput = form.querySelector('input[name="description"]')
    // fireEvent.change(descriptionInput, { target: { value: lucky.description } })
    // const speciesSelect = form.querySelector("select")
    // fireEvent.change(speciesSelect, { target: { value: lucky.species } })
    // fireEvent.submit(form)
    // await wait(
    //   () => {
    //     assert.equal(nameInput.value, "")
    //     assert.equal(descriptionInput.value, "")
    //     assert.equal(speciesSelect.value, "cat")
    //   },
    //   { timeout: 10, interval: 5 }
    // )
  })

  // Assume for now that AddPet is a child of Root...
  // it("BONUS: calls props.refetch after form submission", async () => {
  //   const refetch = spy()
  //   const { getByTestId } = render(<AddPet refetch={refetch} />)

  //   const lucky = {
  //     name: "Lucky",
  //     description: "Labradoodle who loves to chase squirrels",
  //     species: "dog"
  //   }
  //   mockAxios.onPost("/api/pets", lucky).reply(201, lucky)
  //   const form = getByTestId("add-pet")

  //   const nameInput = form.querySelector('input[name="name"]')
  //   fireEvent.change(nameInput, { target: { value: lucky.name } })

  //   const descriptionInput = form.querySelector('input[name="description"]')
  //   fireEvent.change(descriptionInput, {
  //     target: { value: lucky.description }
  //   })

  //   const speciesSelect = form.querySelector("select")
  //   fireEvent.change(speciesSelect, { target: { value: lucky.species } })

  //   fireEvent.submit(form)

  //   await wait(
  //     () => {
  //       assert.isTrue(refetch.called)
  //     },
  //     { timeout: 10, interval: 5 }
  //   )
  // })

  // it("BONUS: Root refetches list of pets after form submission", async () => {
  //   const { getByTestId } = render(<Root />)

  //   const lucky = {
  //     name: "Lucky",
  //     description: "Labradoodle who loves to chase squirrels",
  //     species: "dog"
  //   }
  //   mockAxios.onPost("/api/pets", lucky).reply(201, lucky)
  //   const form = getByTestId("add-pet")

  //   const nameInput = form.querySelector('input[name="name"]')
  //   fireEvent.change(nameInput, { target: { value: lucky.name } })

  //   const descriptionInput = form.querySelector('input[name="description"]')
  //   fireEvent.change(descriptionInput, {
  //     target: { value: lucky.description }
  //   })

  //   const speciesSelect = form.querySelector("select")
  //   fireEvent.change(speciesSelect, { target: { value: lucky.species } })

  //   fireEvent.submit(form)

  //   await wait(
  //     () => {
  //       assert.equal(getRequests(), 2)
  //     },
  //     { timeout: 10, interval: 5 }
  //   )
  // })

  // // TODO: Write this one maybe.
  // it("BONUS: handles errors gracefully", async () => {})
})
