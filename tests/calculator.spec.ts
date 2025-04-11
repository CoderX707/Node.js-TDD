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

test('Handles newlines and get sum',()=>{
    expect(add('1\n2,3\n4')).toBe(10)
})

test('Supports custom delimiter', () => {
    expect(add('//;\n3;5\n')).toBe(8);
});
  

test('Throw error for negative numbers', () => {
    expect(()=>add('10,-10')).toThrowErrorMatchingSnapshot("negatives not allowed  -10")
})