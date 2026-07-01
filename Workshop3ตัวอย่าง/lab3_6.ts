export
type Category = "Electronics" | "Clothing" | "Food";


interface Product {
    readonly id: number;
    name: string;
    category: Category;
    price: number;
}


const products: Product[] = [
    { id: 1, name: "สมาร์ตโฟน", category: "Electronics", price: 25000 },
    { id: 2, name: "เสื้อยืด", category: "Clothing", price: 350 },
    { id: 3, name: "แอปเปิ้ล", category: "Food", price: 30 },
    { id: 4, name: "โน้ตบุ๊ก", category: "Electronics", price: 45000 },
    { id: 5, name: "กางเกงยีนส์", category: "Clothing", price: 1200 }
];

function filterProductsByCategory(productList: Product[], searchCategory: Category): Product[] {

    return productList.filter(product => product.category === searchCategory);
}

const electronicsProducts = filterProductsByCategory(products, "Electronics");
console.log("รายการสินค้าหมวดหมู่ Electronics:", electronicsProducts);
const foodProducts = filterProductsByCategory(products, "Food");
console.log("รายการสินค้าหมวดหมู่ Food:", foodProducts);