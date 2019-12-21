/* eslint-env mocha */

import "core-js/stable"
import "regenerator-runtime/runtime"

import MockAdapter from "axios-mock-adapter"
import axios from "axios"

export const mockAxios = new MockAdapter(axios)

const pets = require('../petdata')
mockAxios.onGet('/api/pets').reply(200, pets.slice(1))
