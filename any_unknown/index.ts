let number1: any = 10;
number1 = "harsh";

let number2: unknown;
number2 = 1;
number2 = "harsh sachin said"

console.log(number1);
if (typeof number2 === "string") {
    console.log(number2);
}


