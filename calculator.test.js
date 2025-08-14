import { Calculator } from "./calculator.js";

describe('Calculator object', () => {

  let calculator;
  beforeAll(() => {
    calculator = new Calculator();
  })

  describe('calculator methods tests', () => {


    test('Calculator object is defined', () => {
      expect(calculator).toBeDefined()

    })

    test('Calculator has add method', () => {
      expect(calculator.add).toBeDefined()
    })

    test('Calculator has subtract method', () => {
      expect(calculator.subtract).toBeDefined()
    })

    test('Calculator has multiply method', () => {
      expect(calculator.multiply).toBeDefined
    })

    test('Calculator has divide method', () => {
      expect(calculator.divide).toBeDefined()
    });
  })

  describe('calculator method add', () => {

    test('2 + 2 equals 4', () => {
      expect(calculator.add(2, 2)).toBe(4)
    })
    test('-1 + -12 to be -13', () => {
      expect(calculator.add(-1, -12)).toBe(-13)
    })
  })

  describe('calculator method subtract', () => {
    test('5 - 2 to be 3', () => {
      expect(calculator.subtract(5, 2)).toBe(3)
    })
    test('-2 - 2 to be 0', () => {
      expect(calculator.subtract(-2, 2)).toBe(-4)
    })

    let tableSub = [
      [1, 3, -2],
      [-1, -1, 0],
      [45, -3, 48],
    ]

    test.each(tableSub)('%d subtract %d should return %d', (a, b, r) => {
      expect(calculator.subtract(a, b)).toBe(r)
    })
  });

  describe('calculator multiply method tests', () => {
    test('2 * 4 to be 8', () => {
      expect(calculator.multiply(2, 4)).toBe(8)
    })

    test('-2 * 5 to be -10', () => {
      expect(calculator.multiply(-2, 5)).toBe(-10)
    })
  })

  describe('calculator divide method', () => {
    test('10 divided by 5 to be 2', () => {
      expect(calculator.divide(10, 5)).toBe(2)
    })

    test('12 divided by 3 to be 4', () => {
    expect(calculator.divide(12, 3)).toBe(4)
    })
    
  })

})
