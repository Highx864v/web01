enum Role{ Admin = "Admin",Editor = "Editor",Viewer = "Viewer"}
interface User {name: string;email: string;role: Role;}
function checkAccess(user: User): void {
    if (user.role === Role.Admin) {
        console.log(`ยินดีต้อนรับคุณ Admin ${user.name}! คุณมีสิทธิ์เข้าถึงระบบได้อย่างสมบูรณ์`);
    }
    else if (user.role === Role.Editor) {
        console.log(`สวัสดีคุณ Editor ${user.name}! คุณสามารถแก้ไขเนื้อหาได้`);
    }
    else if (user.role === Role.Viewer) {
        console.log(`สวัสดีคุณ Viewer ${user.name}! คุณมีสิทธิ์อ่านข้อมูลได้อย่างเดียว`);
    }
    else {
        console.log("ปฏิเสธการเข้าถึง: ไม่รู้จักสิทธิ์การใช้งานนี้");
    }
}
const adminUser1: User = {name: "Natnaris",email: "dghiesh@gmail.com",role: Role.Admin};
let User1 : User ={name: "Prayut",email:"ayfa@gmail.com",role:Role.Editor};
checkAccess(adminUser1);
checkAccess(User1);