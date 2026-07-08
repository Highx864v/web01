class House{
    constructor(public room:number,public bathroom:number,public area:number,public price:number){
    }
    show(): void {
        console.log(`ห้อง: ${this.room}, ห้องน้ำ: ${this.bathroom}, ขนาด: ${this.area}, ราคา: ${this.price} บาท`);
    }
}
const house1 = new House(4,3,150,1200000)
house1.show();