const express = require("express")
const morgan = require("morgan")
const ParcelBundler = require("parcel-bundler")
const { join } = require("path")
const pets = require("./petdata")

const app = express()
app.use(express.json())

app.use(morgan("dev"))

app.get("/api/pets", (req, res) => {
  // Wanna see what would happen if this endpoint were to fail? Uncomment
  // this line and comment out the other responses:
  res.sendStatus(500)

  // Wanna see what would happen if this endpoint were to take a whole second?
  // Uncomment this line and comment out the other responses:
  // setTimeout(() => {
  //   res.json(pets)
  // }, 1000)

  // This is how this endpoint SHOULD behave:
  // res.json(pets)
})

app.post("/api/pets", (req, res) => {
  const { name, description, species } = req.body
  const newPet = { name, description, species }
  pets.push(newPet)
  res.json(newPet)
})

const bundler = new ParcelBundler(join(__dirname, "./src/index.html"))
app.use(bundler.middleware())

module.exports = app
