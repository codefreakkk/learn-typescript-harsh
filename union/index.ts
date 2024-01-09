type Params = number | string;

const get = (value: Params): Params => {
    if (typeof value === "number") {
        return value * 2;
    }
    else {
        return value;
    }
}

console.log(get("harsh"));
