// class in typescript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persons = /** @class */ (function () {
    function Persons(studentName, age) {
        this.studentName = studentName;
        this.age = age;
    }
    Persons.prototype.getData = function () {
        return "studentName: ".concat(this.studentName, ", Age: ").concat(this.age);
    };
    return Persons;
}());
var obj1 = new Persons("Harsh", 21);
var obj2 = new Persons("Prachi", 20);
console.log(obj1.getData());
// inheritance in typescript
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(studentName, age, grade) {
        var _this = _super.call(this, studentName, age) || this;
        _this.grade = grade;
        return _this;
    }
    Students.prototype.getResults = function () {
        return "studentName: ".concat(this.studentName, ", Grade: ").concat(this.grade);
    };
    return Students;
}(Persons));
var obj3 = new Students("Harsh", 21, "A+");
var obj4 = new Students("Prachi", 20, "A");
console.log(obj3.getResults());
console.log(obj4.getResults());
// static keyword in typescript
var Company = /** @class */ (function () {
    function Company(empName, empAge) {
        this.empName = empName;
        this.empAge = empAge;
    }
    Company.getComapanyName = function () {
        return Company.companyName;
    };
    Company.prototype.getEmpDetails = function () {
        return "Emp name: ".concat(this.empName, ", Company Name: ").concat(Company.companyName);
    };
    Company.companyName = "Logiquad";
    return Company;
}());
var emp1 = new Company("Harsh", 21);
var emp2 = new Company("Prachi", 20);
console.log(emp1.getEmpDetails());
console.log(emp2.getEmpDetails());
console.log(Company.getComapanyName());
