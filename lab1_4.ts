let money: number = 50000;
let Tax: number = Math.round(0.07 * money);
let totals: number = Math.round(money - Tax); 
console.log("Money: $%d \nTax Rate: 7% \nTax Paid: $%d \nTotal: $%d", money, Tax, totals);