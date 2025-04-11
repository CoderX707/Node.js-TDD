export const add = (numbers: string): number => {
    if (numbers === '') return 0;
    let delimiter = /,|\n/
    if (numbers.startsWith("//")) {
        const [delimLine, rest] = numbers.split('\n');
        const customDelimiter = delimLine.substring(2)
        delimiter = new RegExp(customDelimiter)
        numbers = rest
    }
    const nums = numbers.split(delimiter).map(Number)
    return nums.reduce((prev, current) => (prev + current), 0)
}