export {};
class CPU {
    constructor(private brand: string, private cores: number) {}
    process(): void {
        console.log(`CPU ${this.brand} cores ${this.cores}`);
    }
    showInfo(): void {
        console.log(` CPU ${this.brand}, cores ${this.cores}`);
    }
}
class RAM {
    constructor(private capacity: number) {}
    load(): void {
        console.log(`RAM ${this.capacity} GB `);
    }
    showInfo(): void {
        console.log(`RAM ${this.capacity} GB`);
    }
}
class Storage {
    constructor(private capacity: number, private type: string) {}
    readData(): void {
        console.log(`Storage ${this.type} ความจุ ${this.capacity} GB `);
    }
    showInfo(): void {
        console.log(`Storage ${this.type}, ความจุ ${this.capacity} GB`);
    }
}
class Computer {
    private cpu: CPU;
    private ram: RAM;
    private storage: Storage;
    constructor(cpu: string,cores: number,ram: number,storage: number,storageType: string)
    {
        this.cpu = new CPU(cpu, cores);
        this.ram = new RAM(ram);
        this.storage = new Storage(storage, storageType);
    }
    boot(): void {
        this.cpu.process();
        this.ram.load();
        this.storage.readData();
        console.log("คอมพิวเตอร์กำลังเริ่มต้นระบบ\nคอมพิวเตอร์พร้อมใช้งานแล้ว!");
    }
    showComputerInfo(): void {
        console.log("ข้อมูลคอมพิวเตอร์:");
        this.cpu.showInfo();
        this.ram.showInfo();
        this.storage.showInfo();
    }
}
const myPC = new Computer("Intel", 8, 16, 512, "SSD");
myPC.boot();
console.log("");
myPC.showComputerInfo();