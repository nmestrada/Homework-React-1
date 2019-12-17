const express = require("express")
const morgan = require("morgan")
const ParcelBundler = require("parcel-bundler")
const { join } = require("path")
const pets = require("./petdata")

const app = express()

app.use(morgan("dev"))

app.get("/api/pets", (req, res) => {
  res.json(pets)
})

const bundler = new ParcelBundler(join(__dirname, "./src/index.html"))
app.use(bundler.middleware())

const PORT = 1234
app.listen(PORT, () => {
  console.log(`Request some furry pals at port ${PORT}`)
})
