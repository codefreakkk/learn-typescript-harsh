const getValue1 = <T> (value: T): T => {
    return value;
}

function getValue2<T>(value: T): T {
    return value;
}

console.log(getValue1<string>("harsh"));
console.log(getValue2<number>(2));

const func1 = <T, U> (value1: T, value2: U) => {
    console.log(value1);
    console.log(value2);   
}

const func2 = <T, U> (value1: T, value2: U, value3: boolean) => {
    console.log(value1);
    console.log(value2);
    console.log(value3);
}

func1<number, string>(10, "harsh");
func2<number, string>(20, "harsh", true);


