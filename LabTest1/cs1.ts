let cupSize: string = "S";
let ownCup: boolean = true;
let price: number = 0;
let discount: number = 0;

if (cupSize === "S") {
  price = 60;
} else if (cupSize === "M") {
  price = 80;
} else {
  price = 100;
}

if (ownCup === true) {
  discount = price * 0.05;
}
let netPrice: number = price - discount;
console.log("กาแฟ ขนาด " , cupSize ," ราคา ปกติ " , price , " บาท\n" ,"ได้รับส่วนลด 5%" ," ราคาสุทธิ " , netPrice , " บาท");
