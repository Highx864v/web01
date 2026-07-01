let result: string | number;
result ="Done";
console.log(result);
result=20;
console.log(result)


enum Status {
    Active,
    Probation,
    Inactice
}
let studentStatus : Status = Status.Active;
console.log(studentStatus);

type ID =string | number;
type Student ={
    id: ID,
    name: string
}
let student: Student ={id: "684245033",name: "Jirawat"};
console.log(student);
interface Product{
    readonly barcode :string;
    name : string;
    price : number;
    discount?: number
}
const product: Product[] = [
    {barcode:"8851234500015",name:"Laptop",price: 20000},
    {barcode:"8851234500015",name:"Printer",price: 8000,discount:5},
    {barcode:"8851234500015",name:"Scanner",price: 12000}
];
function showProduct(product:Product):void{
    console.log(`Barcode : ${product.barcode}
Name :${product.name}
Price :${product.price}
Discount: ${product.discount}
=============================`);
}
for(const p of product){
    showProduct(p);
}