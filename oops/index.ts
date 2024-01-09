// class in typescript

class Persons {
    protected studentName: string; 
    protected age: number;

    constructor(studentName: string, age: number) {
        this.studentName = studentName;
        this.age = age;
    }

    public getData(): string {
        return `studentName: ${this.studentName}, Age: ${this.age}`;
    }
}

const obj1: Persons = new Persons("Harsh", 21);
const obj2: Persons = new Persons("Prachi", 20);

console.log(obj1.getData());

// inheritance in typescript

class Students extends Persons {
    protected grade: string;

    constructor(studentName: string, age: number, grade: string) {
        super(studentName, age);
        this.grade = grade;
    }

    public getResults(): string {
        return `studentName: ${this.studentName}, Grade: ${this.grade}`
    }
}

const obj3: Students = new Students("Harsh", 21, "A+");
const obj4: Students = new Students("Prachi", 20, "A");

console.log(obj3.getResults());
console.log(obj4.getResults());

// static keyword in typescript

class Company {
    public static companyName = "Logiquad";
    empName: string;
    empAge: number;

    constructor(empName: string, empAge: number) {
        this.empName = empName;
        this.empAge = empAge;
    }

    public static getComapanyName(): string {
        return Company.companyName;
    }

    public getEmpDetails(): string {
        return `Emp name: ${this.empName}, Company Name: ${Company.companyName}`;
    }
}

const emp1: Company = new Company("Harsh", 21);
const emp2: Company = new Company("Prachi", 20);

console.log(emp1.getEmpDetails());
console.log(emp2.getEmpDetails());
console.log(Company.getComapanyName());

