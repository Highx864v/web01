export{};

class Notification {
    send(message: string): void {}
}

class EmailNotification extends Notification {
    send(message: string): void {
        console.log(`Email Notification: ${message}`);
    }
}

class SMSNotification extends Notification {
    send(message: string): void {
        console.log(`SMS Notification: ${message}`);
    }
}

class PushNotification extends Notification {
    send(message: string): void {
        console.log(`Push Notification: ${message}`);
    }
}

const notifications: Notification[] = [new EmailNotification(), new SMSNotification(), new PushNotification()];

notifications.forEach(notification => notification.send("สวัสดีตอนเช้า สมาชิกทุกท่าน"));