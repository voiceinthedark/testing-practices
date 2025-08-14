import Utils from "./Utils.js"

describe('Utils static class', () => {

  test('class is defined', () => {
    expect(Utils).toBeDefined()
  })

  let table = [
    ['jim', "Jim"],
    ['kim', "Kim"],
    ['tim', "Tim"],
    ['ohm', "Ohm"],
  ]

  test.each(table)(
    "%s should return %s", (input, expected) => {
      expect(Utils.capitalize(input)).toBe(expected)
    }
  )

  describe('reverseString method tests', () => {
    // test('jim should return mij', () => {
    //   expect(Utils.reverseString('jim')).toBe("mij")
    // })

    let tableReverse = [
      ['kim', 'mik'],
      ['blonde', 'ednolb'],
      ['tidal wave', 'evaw ladit'],
    ]

    test.each(tableReverse)(
      '%s should return %s', (input, expected) => {
        expect(Utils.reverseString(input)).toBe(expected)

      })

  })



})
