const express = require("express")
const morgan = require("morgan")
const pets = require("./petdata")
const Bundler = require("parcel-bundler")

const app = express()

const clientEntryPoint = __dirname + '/src/index.html'
const bundler = new Bundler(clientEntryPoint, {})

console.log(bundler.middleware)


app.use(morgan('dev'))

app.get("/api/pets", (req, res) => {
  res.json(pets)
})

app.use(bundler.middleware())

const PORT = 4321
app.listen(PORT, () => {
  console.log(`Request some furry pals at port ${PORT}`)
})
