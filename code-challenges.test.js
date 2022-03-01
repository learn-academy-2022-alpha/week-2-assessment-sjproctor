// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multipled by 3.

// describe("function-name", () => {
//   it("details about the test", () => {
//     expect(function-name()).toEqual(exact-output)
//   })
// })



// a) Create a test with expect statements for each of the variables provided.

// describe("function-name", () => {
//   it("details about the test", () => {
//     const numbersArray1 = [6, 7, 8, 9, 10]
//     // Expected output: [18, 21, 24, 27, 30]
//     const numbersArray2 = [24, 27, 30, 33, 36]
//     // Expected output: [72, 81, 90, 99, 108]
//     expect(function-name()).toEqual(exact-output)
//     expect(function-name()).toEqual(exact-output)
//   })
// })


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("divisibleByThree", () => {
  it("takes a number as an argument and decides if the number is evenly divisble by three or not", () => {
    const num1 = 15
    // Expected output: "15 is divisible by three"
    const num2 = 0
    // Expected output: "0 is divisible by three"
    const num3 = -7
    // Expected output: "-7 is not divisible by three"
    expect(divisibleByThree(num1)).toEqual("15 is divisible by three")
    expect(divisibleByThree(num2)).toEqual("0 is divisible by three")
    expect(divisibleByThree(num3)).toEqual("-7 is not divisible by three")
  })
})

// Pseudo code:
// create a function - divisibleByThree
// parameter - number
// modulo operator to determine if the number is divisble by three
// return string interpolation with the number and a description

// b) Create the function that makes the test pass.

const divisibleByThree = (number) => {
  if(number % 3 === 0) {
    return `${number} is divisible by three`
  } else {
    return `${number} is not divisible by three`
  }
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("arrayCapitalizer", () => {
  it("takes in an array of words and returns an array with all the words capitalized", () => {
    const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
    // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
    // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
    expect(arrayCapitalizer(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(arrayCapitalizer(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})

// Pseudo code:
// create a function - arrayCapitalizer
// parameter - array
// do something to each item in an array - iteration
// requirements of iteration - length is not going to change, array -> array, map!
// value of map will be a string - capitalize
// isolate the first letter of string and uppercase - can use splice, chartAt, [0]
// the rest of the word - substring, slice at index 1, string iterpolation, concat with method plus sign to combine the first letter and the rest of the word
// return array of string with capital letters

// b) Create the function that makes the test pass.

const arrayCapitalizer = (array) => {
  return array.map(value => {
    return `${value[0].toUpperCase()}${value.slice(1)}`
  })
}


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

describe("function-name", () => {
  it("details about the test", () => {
    const vowelTester1 = "learn"
    // Expected output: 1
    const vowelTester2 = "academy"
    // Expected output: 0
    const vowelTester3 = "challenges"
    // Expected output: 2
    expect(function-name()).toEqual(exact-output)
    expect(function-name()).toEqual(exact-output)
    expect(function-name()).toEqual(exact-output)
  })
})

Pseudo code:
create function - firstVowel
parameter - string
decision about each item in the string - iteration
for loop give us access to each character in the string
conditional statement with an equality evaluation for each vowel
indexOf method
return number



// b) Create the function that makes the test pass.
