const fsOperations = require('../')

describe('fs-operations', () => {
  test('main function returns a greeting', () => {
    expect(fsOperations()).toEqual('hi')
  })
})
