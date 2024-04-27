export const items = new Array(29_999_999).fill(0).map((_, index) => {
  return {
    value: index,
    selected: index === 29_999_998,
  }
})
