class Laptop{
    brand: string;
    price: number;
    cpu: string;
    constructor(b: string, p: number, c: string){
        this.brand = b;
        this.price = p;
        this.cpu = c;
    }
    show():void{
        console.log(`Laptop Brand: ${this.brand}, Cpu: ${this.cpu}, Price: ${this.price}`);
    }
}
const Laptop1 = new Laptop("Dell",25000,"Intel Quad Core");
Laptop1.show();
const Laptop2 = new Laptop("HP",26500,"AMD");
Laptop2.show();