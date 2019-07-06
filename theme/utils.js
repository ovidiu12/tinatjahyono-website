const em = (value, context = "16px") => {
  const compute = parseFloat(value) / parseFloat(context)
  return `${compute}em`
}

export default {
  em,
}
