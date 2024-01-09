// pure typescript function
var get1 = function (name, id) {
    return "My name is ".concat(name, " and my id is ").concat(id);
};
// default parameter in typescript
var get2 = function (name, id) {
    if (id === void 0) { id = 1; }
    return "Name: ".concat(name, ", id: ").concat(id);
};
// optional paramter in typescript
var get3 = function (name, id) {
    if (id) {
        return "Name: ".concat(name, ", id: ").concat(id);
    }
    else {
        return "Name: ".concat(name);
    }
};
console.log(get1("harsh said", 1));
console.log(get2("harsh"));
console.log(get3("prachi"));
