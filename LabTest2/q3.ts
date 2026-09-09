class FienessMember{
    constructor(public memberName: string,public points: number) {}

    get point(): number{
        return this.points
    }
    set point(value: number){
        if(value >= 0) {
            this.points = value;
        } else {
            console.log(`คะแนนสะสมไม่สามารถเป็นค่าลบได้\nคะแนนสะสม ${this.points} คะแนน`)
        }
    }
    addPoints(amount: number) {
        if(amount > 0) {
            this.point += amount;
            console.log(`เพิ่มคะแนน ${amount} คะแนน\nคะแนนสะสม ${this.points} คะแนน`)
        }
    }
    usePoints(amount:number) {
        if(amount > 0) {
            this.point -= amount;
            console.log(`ใช้คะแนนคะแนน ${amount} คะแนน\nคะแนนสะสม ${this.points} คะแนน`)
        } else {
            console.log("คะแนนสะสมไม่พอสำหรับการใช้งาน")
        }
    }
    displayinfo():void {
        console.log(`สมาชิก: ${this.memberName} \nคะแนนสะสม ${this.points} คะแนน`)
    }
}
const display2 = new FienessMember("อนันต์",500);
display2.displayinfo();
display2.addPoints(200);
display2.usePoints(100);
display2.usePoints(1000);
display2.point = -100;

