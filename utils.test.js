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

  describe('ceasar cipher method tests', () => {

    test('expect caesar cipher to be defined', () => {
      expect(Utils.caesarCipher).toBeDefined()
    })

    test('expect xyz shifted 3 to be abc', () => {
      expect(Utils.caesarCipher('xyz', 3)).toBe('abc')
    })
    test('the shifted 2 to be vjg', () => {
      expect(Utils.caesarCipher('the', 2)).toBe('vjg')
    })
    test('moon shifted 4 to be qssr', () => {
      expect(Utils.caesarCipher('moon', 4)).toBe('qssr')
    })

    let tableCaesar = [
      ['Hello', 5, 'Mjqqt'],
      ['What Is the Matter?', 7, 'Doha Pz aol Thaaly?'],
      ['ThE cloud. RuleR TemplE', 12, 'FtQ oxagp. DgxqD FqybxQ']
    ]

    test.each(tableCaesar)('%s shifted %d characters should give %s',
      (input, shift, output) => {
        expect(Utils.caesarCipher(input, shift)).toBe(output)
      })
  })

  describe('Analyze array tests', () => {
    test('Analyze an array should return an object', () => {
      expect(Utils.analyzeArray([])).toBeInstanceOf(Object)
    })

    test('the object returned should have an average property', () => {
      expect(Utils.analyzeArray([])).toHaveProperty('average')
    })
    test('the object returned should have an max property', () => {
      expect(Utils.analyzeArray([])).toHaveProperty('max')
    })
    test('the object returned should have an min property', () => {
      expect(Utils.analyzeArray([])).toHaveProperty('min')
    })
    test('the object returned should have an length property', () => {
      expect(Utils.analyzeArray([])).toHaveProperty('length')
    })

    test('the min of the array should return 1', () => {
      expect(Utils.analyzeArray([1,2,8,3,6,4])).toHaveProperty('min', 1)
    })
    test('average should be 4', () => {
      expect(Utils.analyzeArray([1,2,8,3,6,4])).toHaveProperty('average', 4)
    })
    test('max should be 8', () => {
      expect(Utils.analyzeArray([1,2,8,3,6,4])).toHaveProperty('max', 8)
    })
    test('length should be 6', () => {
      expect(Utils.analyzeArray([1,2,8,3,6,4])).toHaveProperty('length', 6)
    })
  })
})

