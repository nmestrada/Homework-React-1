const express = require("express")
const morgan = require("morgan")
const pets = require("./petdata")

const app = express()
app.use(morgan('dev'))

app.get("/api/pets", (req, res) => {
  res.json(pets)
})

const PORT = 4321
app.listen(PORT, () => {
  console.log(`Request some furry pals at port ${PORT}`)
})
