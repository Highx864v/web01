export
interface Product {
    id: number;
    name: string;
    price: number;
}

type Status = "Available" | "Out of Stock";

function printProductSummary(item: Product, status: Status): void {

    let statusText: string = "";
    if (status === "Available") {
        statusText = "พร้อมจำหน่าย";
    } else {
        statusText = "สินค้าหมด";
    }

    console.log(`--- สรุปข้อมูลสินค้า ---`);
    console.log(`รหัสสินค้า: ${item.id}`);
    console.log(`ชื่อสินค้า: ${item.name}`);
    console.log(`ราคา: ${item.price} บาท`);
    console.log(`สถานะ: ${statusText}`);
}

const testProduct: Product = {
    id: 101,
    name: "ข้าวกะเพราไก่",
    price: 55
};

printProductSummary(testProduct, "Available");