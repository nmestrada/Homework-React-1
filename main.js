const app = require('./app')

const PORT = 1234
app.listen(PORT, () => {
  console.log(`Request some furry pals at port ${PORT}`)
})
