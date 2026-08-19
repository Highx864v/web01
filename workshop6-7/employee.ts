export {};

class Employee {
    constructor(public name: string) {}
}

class Programmer extends Employee {
    constructor(name: string, public lang: string) {
        super(name);
    }
}

class Manager extends Employee {
    constructor(name: string, public dept: string) {
        super(name);
    }
}

const emp1 = new Employee('Jirawat');
console.log(emp1.name);

const programmer1 = new Programmer('Viroon', "typescript");
console.log(programmer1.name);
console.log(programmer1.lang);

const manager1 = new Manager("oamdn", "IT");
console.log(`${manager1.name} เป็นผู้จัดการแผนก ${manager1.dept}`);