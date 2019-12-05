import React from "react"

// Trying out risky Babel features so that everything works.

// Async Await
async function hello() {
  await Promise.resolve()
  return "hello world"
}
hello()

class Thing extends React.Component {
  // Async class methods
  async helpfulFn() {
    await hello()
    return "Thing"
  }
  render() {
    // Array spreading
    const things = [1, 2, 3, 4]
    const [, , , last] = things
    console.log(last)
    return (
      // Fragment shorthands
      <>
        <div>This is a Thing</div>
      </>
    )
  }
}

export default Thing
