const scores: number[] = [75, 85, 95, 64, 35];
const student: [number, string] = [1, "John Doe"];
console.log("รหัสนักศึกษา:", student[0]);
console.log("ชื่อ:", student[1]);
console.log("คะแนนสอบ:");
let total = 0;
for (let i = 0; i < 5; i++) {
    console.log("วิชาที่", i + 1, "คะแนน:", scores[i]);
    total += scores[i];
}
const average = total / 5;
console.log("คะแนนทั้งหมด:", total);
console.log("ค่าเฉลี่ยคะแนน:", average);