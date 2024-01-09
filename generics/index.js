var getValue1 = function (value) {
    return value;
};
function getValue2(value) {
    return value;
}
console.log(getValue1("harsh"));
console.log(getValue2(2));
var func1 = function (value1, value2) {
    console.log(value1);
    console.log(value2);
};
var func2 = function (value1, value2, value3) {
    console.log(value1);
    console.log(value2);
    console.log(value3);
};
func1(10, "harsh");
func2(20, "harsh", true);
