// map method
let numbers: number[] = [1, 2, 3, 4, 5];
const doubleNumber = numbers.map((val: number) => val * 2);
console.log(doubleNumber);

// filter
const evenNumbers = numbers.filter((val: number) => val % 2 == 0);
console.log(evenNumbers);
