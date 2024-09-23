// 1. define a function that takes two numbers: lower and upper.
// The function should return an array containing all the numbers between
// lower and upper, including lower and upper.
//
// Example Input and Output:
// Input        | Output
// 1, 3         | [1,2,3]
// 10, 13       | [10, 11, 12, 13]
// -1, 1        | [-1, 0, 1]
//
// TODO: write code below
function createArray(lower, upper) {
  const newArray = []
  for (let i = lower; i <= upper; i++) {
    newArray.push(i)
  }
  return newArray
}

// 2. define a function that takes two arguments: a string and a number.
// The function should return the same string but in upper case with exclamation
// marks appended to the end. The number of exclamation marks should be
// determined by the number argument.
//
// Example Input and Output:
// Input        | Output
// disaster, 5  | DISASTER!!!!!
// error, 10    | ERROR!!!!!!!!!!
//
// TODO: write code below
function exclamation(str, number) {
  for (let i = 0; i < number; i++) {
    str += '!'
  }
  return str.toUpperCase()
}

// 3. define a function that takes two arguments: a string and a number.
// The function should return the new time in 24hr time after adding the additional time in minutes.
//
// Example Input and Output:
// Input        | Output
// '7:50', 4    | '7:54'
// '7:50', 72   | '9:02'
// '11:50', 20  | '12:10'
// '12:50', 120 | '14:50'
// '23:50', 30  | '00:20'
// TODO: write code below
function changeTime(str, num) {
  let minutes =
    parseInt(str.slice(0, str.indexOf(':')) * 60) +
    parseInt(str.slice(str.indexOf(':') + 1, str.lenght))

  minutes += num
  let hours = minutes / 60
  let remainingMins = hours.toString()

  if (remainingMins.includes('.')) {
    remainingMins = remainingMins.substring(
      remainingMins.indexOf('.') + 1,
      remainingMins.length
    )
  } else {
    remainingMins = '00'
  }
  remainingMins = Math.round(parseFloat('0.' + remainingMins) * 60).toString()
  if (remainingMins.length === 1) {
    remainingMins = '0' + remainingMins
  }

  if (Math.floor(hours) === 24) {
    hours = '00'.toString()
  } else {
    hours = Math.floor(hours)
  }

  return hours + ':' + remainingMins
}

// TODO: change the exported value to be the name of the function you defined
module.exports = {
  a: createArray, // 1. change undefined to be the name of the function defined to create the range of numbers (the first todo)
  b: exclamation, // 2. change undefined to be the name of the function defined to return the string with exclamations (the second todo)
  c: changeTime // etc
}
