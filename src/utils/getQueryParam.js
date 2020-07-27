export default (url) => {
  const params = new URL(url).searchParams
  const page = params.get('p')
  return page
}
