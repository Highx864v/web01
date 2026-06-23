let productName: string = "หูฟังไร้สาย";
let pricePerUnit: number = 650;
let quantity: number = 2;
let isMember: boolean = false;

let totalPrice: number = pricePerUnit * quantity;
let hasDiscount: boolean = totalPrice > 1000 || isMember;
let discountRate: number = (hasDiscount && 0.10) || 0;
let discountAmount: number = totalPrice * discountRate;
let finalPrice: number = totalPrice - discountAmount;

console.log(`ชื่อสินค้า: ${productName} \nจำนวนที่ซื้อ: ${quantity} ชิ้น \nราคารวม: ${totalPrice} บาท \nได้รับส่วนลด: ${hasDiscount} \nราคาที่ต้องจ่าย: ${finalPrice} บาท`);
