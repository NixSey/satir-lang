const varReassign = require('../../../lib/logics/parser/varReassign')
const getJsFormat = require('../test-parser-helper')

describe('Test var Reassign', () => {
  it('Should parse string correctly', () => {
    const test1 = varReassign("rill foo itu 'foo'")
    expect(test1.exp).toBe(`foo = 'foo';`)
  })

  it('Should parse number correctly', () => {
    const test1 = varReassign("rill foo itu 123")
    expect(test1.exp).toBe(`foo = 123;`)
  })

  it('Should return null if not match', () =>{
    const test1 = varReassign("rill foo itu 123")
    const test2 = varReassign("ril foo i 123")
    expect(test1).toBe(null)
    expect(test2).toBe(null)
  })

  it('Should return correctly flexing', () => {
    const jsFormat = getJsFormat(`
    dek foo itu "Hello world"
    rill foo itu "Changed"
  `)
    expect(jsFormat).not.toBeNull()
    expect(jsFormat).toContain(`let foo = "Hello world";`)
    expect(jsFormat).toContain(`foo = "Changed";`)
  })
})
