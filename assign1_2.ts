let bookTitle: string = "พื้นฐานการเขียนโปรแกรม TypeScript";
let isbn: string = "978-616-000-000-1";
let price: number = 650;
let isAvailable: boolean = true;
let bookSummary: [string, number] = [bookTitle, price];
let newPrice: number = price - (price * 0.15);
let premium: boolean = price > 500;
let showBook: boolean = premium && isAvailable;

console.log(`ชื่อหนังสือ: ${bookSummary[0]} \nISBN: ${isbn} \nราคาปก: ${bookSummary[1]} บาท \nราคาหลังลด 15%: ${newPrice} บาท \nเป็นหนังสือ Premium: ${premium} \nสถานะว่าง: ${isAvailable} \nสามารถจัดแสดงหน้าตู้ได้: ${showBook}`);
                                                    
