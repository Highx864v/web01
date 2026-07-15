let product: [string, number, boolean][] = [["LapTop", 15, true],["Desk", 50, false],["Grass Vase", 5, true],["Monitor", 10, true],["Chair", 100, true]];

for (let i = 0; i < product.length; i++) {
    if (product[i][2] == true) {
    console.log("สินค้า:", product[i][0],"จำนวน:", product[i][1],"สถานะ: แตกหักง่าย");
    }
}