/* eslint-env mocha */

import "core-js/stable"
import "regenerator-runtime/runtime"

import Enzyme from "enzyme"
import Adapter from "enzyme-adapter-react-16"

Enzyme.configure({ adapter: new Adapter() })

import waitForExpect from "wait-for-expect"
waitForExpect.defaults.timeout = 10
waitForExpect.defaults.interval = 5

import MockAdapter from "axios-mock-adapter"
import axios from "axios"

export const mockAxios = new MockAdapter(axios)

const { getPets } = require('../petdata')
mockAxios.onGet('/api/pets').reply(200, getPets())
