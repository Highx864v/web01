export {};

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

let p1: Product = {
    id: 101,
    name: "Laptop",
    price: 25000,
    quantity: 10
};

function updateStock(product: Product, sold: number): void {
    if (sold > product.quantity) {
        console.log("Not enough stock");
    } else {
        product.quantity = product.quantity - sold;
        console.log("Sold");
        console.log(product);
    }
}

updateStock(p1, 2);
updateStock(p1, 20);