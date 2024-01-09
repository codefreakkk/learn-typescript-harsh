type Student = {
    name: string;
    age: number;
    greet: (country: string) => string; // method call signature
}

let student1: Student = {
    name: "harsh",
    age: 21, 
    greet: (country: string): string => {
        return `Name : ${student1.name} age : ${student1.age} from : ${country}`
    }
}

console.log(student1.greet("India"));