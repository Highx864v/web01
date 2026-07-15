let weight: number[] = [15, 5.5, 4.2, 8.9, 23, 16, 12.5, 2.7, 27.5, 30];
let count: number = 0;
let total: number = 0;
console.log("พัสดุมีน้ำหนัก ดังนี้");
for (let i = 0; i < weight.length; i++) {
    total = total + weight[i];
    if (weight[i] >= 20) {
        count = count + 1;
        console.log("พัสดุชิ้นที่", i + 1, "น้ำหนัก", weight[i], "กก.");
    }
}

let average: number = total / weight.length;
console.log("พัสดุน้ำหนักเกินเกณฑ์", count, "ชิ้น");
console.log("น้ำหนักเฉลี่ยของพัสดุ", average, "กิโลกรัม");