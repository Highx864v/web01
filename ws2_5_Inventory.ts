let products: [string, number, number][] = [["Laptop", 25000, 5],["Mouse", 500, 10],["Keyboard", 1200, 7]];

for (let i = 0; i < 3; i++) {
    console.log(
        "ชื่อ:", products[i][0],
        "ราคา:", products[i][1],
        "จำนวน:", products[i][2]
    );
}