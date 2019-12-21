/* eslint-env mocha */

import "core-js/stable"
import "regenerator-runtime/runtime"

import MockAdapter from "axios-mock-adapter"
import axios from "axios"

export const mock = new MockAdapter(axios)

const pets = require('../petdata')
mock.onGet('/api/pets').reply(200, pets.slice(1))
