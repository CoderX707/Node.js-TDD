export const add = (numbers: string): number => {
    if (numbers === '') return 0;
    const cleaned = numbers.replace(/\n/g, ',')
    const nums = cleaned.split(",").map(Number)
    return nums.reduce((prev, current) => (prev + current), 0)
}