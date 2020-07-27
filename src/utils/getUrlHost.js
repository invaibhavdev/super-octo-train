export default (url) => {
  const parser = new URL(url)
  return parser.host
}
