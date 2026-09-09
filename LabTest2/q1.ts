class Student {
    private name: string;
    private age: number;

    constructor(n:string,a:number){
        this.name = n;
        this.age = a;
    }
    
    displayinfo():void {
        console.log(`ชื่อ: ${this.name} \nอายุ ${this.age}`)
    }
}
const display = new Student("จิรวัฒน์",21);
display.displayinfo();