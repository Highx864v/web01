abstract class PaymentGateway {
    protected amount: number;
    protected tid: string;

    constructor(amount: number) {
        this.amount = amount;
        this.tid = "TXN-" + Math.floor(1000 + Math.random() * 9000);
    }

    abstract processPayment(): boolean;

    printReceipt(success: boolean): void {
        if (success) {
            console.log(`[ใบเสร็จ] TXN: ${this.tid} | จำนวนเงิน: ${this.amount} บาท | สถานะ: สำเร็จ`);
        } else {
            console.log(`[ใบเสร็จ] TXN: ${this.tid} | สถานะ: ล้มเหลว`);
        }
    }
}

class CreditCardPayment extends PaymentGateway {
    private cardNumber: string;

    constructor(amount: number, cardNumber: string) {
        super(amount);
        this.cardNumber = cardNumber;
    }

    processPayment(): boolean {
        if (this.cardNumber.length === 16) {
            const last4 = this.cardNumber.slice(-4);
            console.log(`[บัตรเครดิต] กำลังชำระเงิน ${this.amount} บาท ด้วยบัตรหมายเลขลงท้าย ${last4}...`);
            return true;
        } else {
            console.log("[บัตรเครดิต] หมายเลขบัตรไม่ถูกต้อง!");
            return false;
        }
    }
}

class PromptPayPayment extends PaymentGateway {
    private phoneNumber: string;

    constructor(amount: number, phoneNumber: string) {
        super(amount);
        this.phoneNumber = phoneNumber;
    }

    processPayment(): boolean {
        if (this.phoneNumber.length === 10) {
            console.log(`[พร้อมเพย์] กำลังสร้าง QR Code จำนวน ${this.amount} บาท (เบอร์โทร: ${this.phoneNumber})...`);
            return true;
        } else {
            console.log("[พร้อมเพย์] หมายเลขโทรศัพท์ไม่ถูกต้อง!");
            return false;
        }
    }
}

const payments: PaymentGateway[] = [];

payments.push(new CreditCardPayment(1500, "1234567890123456"));
payments.push(new CreditCardPayment(500, "1234"));
payments.push(new PromptPayPayment(350, "0812345678"));
payments.push(new PromptPayPayment(10000, "034109300"));

payments.forEach(p => {
    const success = p.processPayment();
    p.printReceipt(success);
});