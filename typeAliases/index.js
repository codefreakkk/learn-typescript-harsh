var student1 = {
    name: "harsh",
    age: 21,
    greet: function (country) {
        return "Name : ".concat(student1.name, " age : ").concat(student1.age, " from : ").concat(country);
    }
};
console.log(student1.greet("India"));
