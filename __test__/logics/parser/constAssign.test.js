const constAssign = require('../../../lib/logics/parser/constAssign')
const getJsFormat = require('../test-parser-helper')

describe('Test Const assign', () => {
  it('Should parse string correctly', () => {
    const test1 = constAssign("yg_bener foo itu 'bar'")
    expect(test1.exp).toBe(`const foo = 'bar';`)
  })

  it('Should parse number correctly', () => {
    const test1 = constAssign("yg_bener foo itu 123")
    expect(test1.exp).toBe(`const foo = 123;`)
  })

  it('Should return null if not match', () =>{
    const test1 = constAssign("bener foo tu 123")
    const test2 = constAssign("yg_bener foo tu 123")
    expect(test1).toBe(null)
    expect(test2).toBe(null)
  })

  it('Should return correctly flexing', () => {
    const jsFormat = getJsFormat(`
      yg_bener foo itu 123
      satirin foo
    `)
    expect(jsFormat).not.toBeNull()
    let shouldMatch = [
      'const foo = 123',
      'console.log(foo)',
    ]
    jsFormat.split("\n").every((v, i) => {
      if(!shouldMatch[i]) return true;
      return expect(v).toContain(shouldMatch[i])
    })
  })
})
