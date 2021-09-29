function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('addTwoNumbers exercise', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

console.log('convertHoursToMinutes exercise', convertHoursToMinutes(2));

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

console.log('getGreeting exercise', getGreeting('World'));

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

console.log('addAndMultiplyBy5 exercise', addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

console.log('multiplyAndDivideBy5 exercise', multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

console.log('subtractTwoNumbers exercise', subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

console.log('getCircumference exercise', getCircleCircumference(5));

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

console.log('getFullName exercise', getFullName('Juan', 'Ramirez'));

function cube(number) {
  return number ** 3;
}

console.log('cube exercise', cube(5));
