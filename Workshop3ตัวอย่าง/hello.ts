function hello(name: string): string{
    return `ยินดีต้อนรับ คุณ ${name} สู่ NPRU`;
}

function vat(amount: number): number{
    return amount*0.07;
}

let message1:string = hello('Jirawat');
let message2:string = hello('Ouamsaard');
let price1: number = 500;
let vat1: number = vat(price1);


console.log(message1);
console.log(message2);
console.log("Price:",price1);
console.log("Vat:",vat1);
