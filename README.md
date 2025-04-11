# 📦 String Calculator - TDD Assignment

This project is a simple **String Calculator** built using **TypeScript** and follows the **Test-Driven Development (TDD)** approach.

## ✅ What is this program for?

The program exports a function `add(numbers: string): number` that takes a string of numbers and returns their sum. It handles:

- Empty input (returns 0)
- Comma-separated values
- Newline-separated values
- Custom delimiters
- Negative number detection (throws error)

---

## 🧪 Examples

```ts
add("")              // returns 0
add("5")             // returns 5
add("1,2,3")         // returns 6
add("1\n2,3\n4")     // returns 10
add("//;\n3;5\n")    // returns 8
add("10,-10")        // throws Error: negatives not allowed -10
```

---

## 🛠️ How to run the project

Follow these steps to clone the project and run the tests locally:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/CoderX707/Node.js-TDD.git
cd Node.js-TDD
```

### 2️⃣ Install dependencies

Make sure you have Node.js installed. Then run:

```bash
npm install
```

### 3️⃣ Run the tests

To run the test suite:

```bash
npm test
```

---

## 📂 Project Structure

```
string-calculator-tdd/
├── src
│   └── calculator.ts        # add() function implementation
├── tests
│   └── calculator.test.ts   # Unit tests for the add() function
├── package.json
└── README.md
```

---

## 🧾 Notes

- Custom delimiter format: `//<delimiter>\n<numbers>`
- Only numeric strings are accepted
- Negative numbers will throw an error with the message listing the negatives
