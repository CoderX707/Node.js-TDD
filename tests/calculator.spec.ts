import { add } from "../src/calculator"

test('Return 0 for empty string',()=>{
    expect(add('')).toBe(0)
})

test('Convert a number in string format into an actual number',()=>{
    expect(add('12')).toBe(12)
})

test('Return the sum of numbers in a comma-separated string',()=>{
    expect(add('1,2,5')).toBe(8)
})