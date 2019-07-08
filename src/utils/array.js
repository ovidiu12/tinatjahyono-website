export const chunk = (array, groupSize) => {
  const groups = []
  for (let i = 0; i < array.length; i += groupSize) {
    groups.push(array.slice(i, i + groupSize))
  }
  return groups
}

export const sum = array =>
  array.reduce((accumulator, currentValue) => accumulator + currentValue)
