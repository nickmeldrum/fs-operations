const getSubDirectories = require('./get-sub-directories')

module.exports = async (directory, asyncFunc) => {
  const results = []
  ;(await getSubDirectories(directory)).forEach(subDir => results.push(asyncFunc(subDir)))
  return Promise.all(results)
}
