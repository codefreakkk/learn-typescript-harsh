var get = function (value) {
    if (typeof value === "number") {
        return value * 2;
    }
    else {
        return value;
    }
};
console.log(get("harsh"));
