// pure typescript function
const get1 = (name: string, id: number): string => {
    return `My name is ${name} and my id is ${id}`;
}

// default parameter in typescript
const get2 = (name: string, id: number = 1): string => {
    return `Name: ${name}, id: ${id}`;
}

// optional paramter in typescript
const get3 = (name: string, id?: number): string => {
    if (id) {
        return `Name: ${name}, id: ${id}`;
    }
    else {
        return `Name: ${name}`;   
    }
}

console.log(get1("harsh said", 1));
console.log(get2("harsh"));
console.log(get3("prachi"));