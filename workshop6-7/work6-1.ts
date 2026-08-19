class Employee {
    private _firstName: string;
    private _lastName: string;

    constructor(fname: string, lname: string) {
        this._firstName = fname;
        this._lastName = lname;
    }

    get fullName(): string {
        return `${this._firstName} ${this._lastName}`;
    }
    set fullName(name: string) {
        const [fname, lname] = name.split(' ');
        this._firstName = fname || '';
        this._lastName = lname || '';
    }
}
let emp1 = new Employee("Jirawat", "Ouamsaard");
console.log(emp1.fullName);
emp1.fullName = "Supasit Ouamsaard";
console.log(emp1.fullName);