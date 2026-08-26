interface StorageService {
    save(data: string): void;
    load(): string;
}

class CloudStorage implements StorageService {
    save(data: string): void {
        console.log(`บันทึกข้อมูลลง Cloud: ${data}`);
    }
    load(): string {
        return "ข้อมูลจาก Cloud Storage";
    }
}

class LocalStorage implements StorageService {
    save(data: string): void {
        console.log(`บันทึกข้อมูลลง Local: ${data}`);
    }
    load(): string {
        return "ข้อมูลจาก Local Storage";
    }
}

let storage: StorageService;
storage = new CloudStorage();
storage.save("UserData");
console.log(storage.load());
storage = new LocalStorage();
storage.save("UserData");
console.log(storage.load());