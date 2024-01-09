// map method
var numbers = [1, 2, 3, 4, 5];
var doubleNumber = numbers.map(function (val) { return val * 2; });
console.log(doubleNumber);
// filter
var evenNumbers = numbers.filter(function (val) { return val % 2 == 0; });
console.log(evenNumbers);
