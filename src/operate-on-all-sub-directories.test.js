const fs = require('fs-extra')
const path = require('path')
const fsOperations = require('../')

const testPath = path.join(__dirname, '../tmp')

const randomString = () =>
  Math.random()
    .toString(36)
    .substring(7)

describe('operateOnAllSubDirectories', () => {
  beforeEach(async () => fs.emptyDir(testPath))
  afterEach(async () => fs.emptyDir(testPath))

  test('function is run on a subdirectory', async () => {
    const subDirectoryName = randomString()
    await fs.ensureDir(path.join(testPath, subDirectoryName))

    const addAFile = async subDirectoryPath => fs.ensureFile(path.join(subDirectoryPath, 'tmpfile'))

    await fsOperations.operateOnAllSubDirectories(testPath, addAFile)

    expect(await fs.pathExists(path.join(testPath, subDirectoryName, 'tmpfile'))).toEqual(true)
  })
})
