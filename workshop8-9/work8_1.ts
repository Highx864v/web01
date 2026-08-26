class PaymentGateWay {
    process(amount: number): void {}
}

class CreditCardPayment extends PaymentGateWay {
    process(amount: number): void {
        console.log(`กำลังประมวลผลบัตรเครดิต... จำนวน ${amount} บาท`);
    }
}

class PayPalPayment extends PaymentGateWay {
    process(amount: number): void {
        console.log(`กำลังส่งไปยัง PayPal... จำนวน ${amount} บาท`);
    }
}

function executePayment(p: PaymentGateWay, amt: number): void {
    p.process(amt);
}

executePayment(new CreditCardPayment(), 1500);
executePayment(new PayPalPayment(), 2500);