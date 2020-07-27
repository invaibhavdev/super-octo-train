const prettifyTime = (time) => {
  const timeToDays = parseInt(time / 24)
  if (timeToDays > 1) {
    return `${timeToDays} days ago`
  } else if (timeToDays === 1) {
    return `${timeToDays} day ago`
  }
  return `${parseInt(time)} hours ago`
}
export default (timestamp) => {
  const now = Date.now()
  const date = new Date(timestamp)
  const diff = now - date
  const timeToHours = diff / (1000 * 60 * 60)
  return prettifyTime(timeToHours)
}
