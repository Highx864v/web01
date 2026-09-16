class Engine {
    constructor(private type: string) {}
    start(): void {
        console.log("เครื่องยนต์เริ่มต้นทำงาน");
    }
    stop(): void {
        console.log("เครื่องยนต์หยุดทำงาน");
    }
    getType(): string {
        return this.type;
    }
}
class Battery {
    constructor(private capacity: number) {}
    charge(): void {
        this.capacity = 100;
        this.showStatus();
        console.log(`ชาร์จแบตเรียบร้อยแล้ว ขณะนี้มีแบตเตอรี่ ${this.capacity}%`);
    }
    showStatus(): void {
        console.log(`ขณะนี้มีแบตเตอรี่อยู่ ${this.capacity}%`);
    }
}
class Car {
    private engine: Engine;
    private battery: Battery;
    constructor(type: string, capacity: number) {
        this.engine = new Engine(type);
        this.battery = new Battery(capacity);
    }
    startCar(): void {
        this.engine.start();
    }
    stopCar(): void {
        this.engine.stop();
    }
    showCarInfo(): void {
        console.log(`ข้อมูล: เครื่องยนต์ชนิด ${this.engine.getType()}`);
        this.battery.showStatus();
    }
    drive(): void {
        this.engine.start();
        console.log("รถยนต์กำลังทำงาน");
    }
}
const car1: Car = new Car("Bs", 10);
car1.drive();
car1.showCarInfo();
car1.startCar();
car1.showCarInfo();
car1.stopCar();