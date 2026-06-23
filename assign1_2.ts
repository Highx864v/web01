let bookTitle: string = "พื้นฐานการเขียนโปรแกรม TypeScript";
let isbn: string = "978-616-000-000-1";
let price: number = 650;
let isAvailable: boolean = true;
let bookSummary: [string, number] = [bookTitle, price];
let newPrice: number = price - (price * 0.15);
let premium: boolean = price > 500;
let showBook: boolean = premium && isAvailable;

console.log("ชื่อหนังสือ: %s\nISBN: %s\nราคาปก: %d บาท\nราคาหลังลด 15%%: %d บาท\nเป็นหนังสือ Premium: %s\nสถานะว่าง: %s\nสามารถจัดแสดงหน้าตู้ได้: %s", bookSummary[0], isbn, bookSummary[1], newPrice, premium, isAvailable, showBook);
                                                    
