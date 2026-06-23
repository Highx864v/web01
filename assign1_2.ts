let bookTitle: string = "พื้นฐานการเขียนโปรแกรม TypeScript";
let isbn: string = "978-616-000-000-1";
let price: number = 650;
let isAvailable: boolean = true;
let bookSummary: [string, number] = [bookTitle, price];
let discountedPrice: number = price - (price * 0.15);
let isPremium: boolean = price > 500;
let canDisplayInShowcase: boolean = isPremium && isAvailable;
let displayStatus: string = (canDisplayInShowcase && "สามารถจัดแสดงที่หน้าตู้โชว์ได้") || "ไม่สามารถจัดแสดงที่หน้าตู้โชว์ได้";

console.log(`ชื่อหนังสือ: ${bookSummary[0]} \nISBN: ${isbn} \nราคาปก: ${bookSummary[1]} บาท \nราคาหลังลด 15%: ${discountedPrice} บาท \nเป็นหนังสือ Premium: ${isPremium} \nสถานะว่าง: ${isAvailable} \nสถานะการจัดแสดง: ${displayStatus}`);
                                                    
