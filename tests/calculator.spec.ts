import { add } from "../src/calculator"

test('Return 0 for empty string',()=>{
    expect(add('')).toBe(0)
})
