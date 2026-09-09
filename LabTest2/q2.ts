export{}

class Vehicle {
    constructor (public brand: string, public speed: number) {}
    
    displayinfo():void {
        console.log(`ยี่ห้อ: ${this.brand} \nความเร็ว ${this.speed} km/h`)
    }
}
class Car extends Vehicle {
    constructor (public brand: string, public speed: number, public doors: number) {
        super(brand,speed);
    }
    override displayinfo(): void {
        console.log(`ยี่ห้อ: ${this.brand} \nความเร็ว ${this.speed} km/h\nจำนวน: ${this.doors} ประตู`)
    }
}
const display = new Car("Toyota",120,4);
display.displayinfo();