export const valueOf = reactWrapper => {
  if (reactWrapper.get(0).props.value) return reactWrapper.get(0).props.value
  return reactWrapper.text()
}
