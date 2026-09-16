class Product {
    constructor(public name: string,public price: number,public quantity: number) {}
    getSubtotal(): number {
        return this.price * this.quantity;
    }
}
class Order {
    private products: Product[] = [];
    addProduct(product: Product): void {
        this.products.push(product);
        console.log(`${product.name}: ${product.price} บาท x ${product.quantity} ชิ้น = ${product.getSubtotal()} บาท`);
    }
    calculateTotal(): number {
        let total = 0;
        this.products.forEach(p => {total += p.getSubtotal();});
        return total;
    }
    calculateDiscount(percent: number): number {
        const total = this.calculateTotal();
        return (total * percent) / 100;
    }
    calculateNetTotal(percent: number): number {
        const total = this.calculateTotal();
        const discount = this.calculateDiscount(percent);
        return total - discount;
    }
}
const order = new Order();
const prod1 = new Product("Laptop", 25000, 2);
const prod2 = new Product("Mouse", 200, 10);
order.addProduct(prod1);
order.addProduct(prod2);
const discount = 10 ;
console.log(`รวมเงินทั้งหมด ${order.calculateTotal()} บาท`);
console.log(`ส่วนลด ${discount}% เป็นเงิน ${order.calculateDiscount(discount)}`)
console.log(`ชำระเงินสุทธิ ${order.calculateNetTotal(discount)}บาท`);