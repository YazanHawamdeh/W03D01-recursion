console.log(arrowTitle);
/* START CODE UNDER THIS LINE */

//pulse check

//q1
/* const recFunction = function () {
  // TODO: Your code here
  return recFunction();
};

recFunction(); */

/////////////////////////////////////////////////////////////////////////

//q2
/* const recFunction = function (number) {
  // TODO: Your code here
  if (number === 0) {
    return "done";
  }
  console.log(number);
  return recFunction(number - 1);
};

recFunction(9); // => undefined */

////////////////////////////////////////////////////////////////////////////////////////

//q3

/* const recFunction = function (number) {
  // TODO: Your code here
  if (number === 0) {
    return 0;
  }

  return recFunction(number - 1);
};

recFunction(9); // => "0" */

/////////////////////////////////////////////////////////////////////////////////////////

//q4

/* const recFunction = function (number) {
  // TODO: Your code here
  if (number === 0) {
    return "0";
  }
  return number + recFunction(number - 1);
};

recFunction(9); // => "9876543210" */

//////////////////////////////////////////////////////////////////////////

//q5

const countDown = function (number) {
  if (number === 0) {
    return 0;
  }
  return number + "-" + countDown(number - 1);
};

/* countDown(10); // => "10-9-8-7-6-5-4-3-2-1-0"
countDown(3); // => "3-2-1-0" */

/////////////////////////////////////////////////////////////////////////////////////////

//prectice

//q1

const factorial = function (number) {
  // TODO: Your code here
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
};

/*   factorial(5); // 1 * 2 * 3 * 4 * 5 => 120
  factorial(3); // 1 * 2 * 3 => 6
  factorial(1); // => 1
  factorial(0); // => 1 */

/////////////////////////////////////////////////////////////////////////////////////////

//q2
const sumCubes = function (numbers) {
  // TODO: Your code here

  if (numbers.length - 1 == 0) {
    return numbers[0] ** 3;
  }

  console.log(numbers.slice(0, 1));

  return numbers[0] ** 3 + sumCubes(numbers.slice(1));
};

/*   sumCubes([1, 2]); // => 9
  
    sumCubes([1, 2, 3]); // => 36
  
    sumCubes([5, 3, 3]); // => 179
  
    sumCubes([]); // => 0 */

/////////////////////////////////////////////////////////////////////////////////////////////////////
//q3

const getLength = function (string) {
  // TODO: Your code here
  if (string === "") {
    return 0;
  }

  return 1 + getLength(string.slice(1));
};

/*  getLength("Hello"); // => 5
  getLength("John"); // => 4
  getLength(""); // => 0 */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//q4

const reverseString = function (string) {
  // TODO: Your code here
  if (!string) {
    return "";
  }

  return reverseString(string.slice(1)) + string[0];
};

/* reverseString("Hello World"); // => "dlrow olleH"
  reverseString("John Doe"); // => "eoD nhoJ"
  reverseString(""); // => "" */

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//q5

const countCharacter = function (string, character) {
  // TODO: Your code here
  if (string.slice(1) == character) {
    return 0;
  }

  return countCharacter(string.slice(1), character);
};

/* countCharacter("hello", "l"); // => 2
  countCharacter("hello", "e"); // => 1
  countCharacter("hello", "z"); // => 0 */
