export const shortAddress = (str: string) => {
  if (str.length > 14) {
    return str.substr(0, 6) + '...' + str.substr(str.length - 3, str.length)
  }
  return str
}
