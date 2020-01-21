export const valueOf = reactWrapper => {
  if (reactWrapper.get(0).props.value) return reactWrapper.get(0).props.value
  return reactWrapper.text()
}

export const findButton = (wrapper, text) => {
  return wrapper.findWhere(node => {
    return node.type() === "button" && node.text() === text
  })
}

export const findFirstMatchingDiv = (wrapper, predicate = () => true) => {
  const divs = wrapper.findWhere(node => {
    return node.type() === "div" && predicate(node)
  })
  if (divs.length < 1) throw new Error("No matching divs found")
  return divs.at(0)
}
