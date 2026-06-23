let productName: string = "หูฟังไร้สาย";
let pricePerUnit: number = 650;
let quantity: number = 2;
let isMember: boolean = false;

let totalPrice: number = pricePerUnit * quantity;
let discount: boolean = totalPrice > 1000 || isMember;
let discountPrice: number = totalPrice * 0.10 * Number(discount);
let finalPrice: number = totalPrice - discountPrice;

console.log(`ชื่อสินค้า: ${productName} \nจำนวนที่ซื้อ: ${quantity} ชิ้น \nราคารวม: ${totalPrice} บาท \nได้รับส่วนลด: ${discount} \nราคาที่ต้องจ่าย: ${finalPrice} บาท`);
