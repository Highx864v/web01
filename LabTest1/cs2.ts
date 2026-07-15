let bonus: number = 5000;
let money: number = 0;

for (let i=1 ; i<=20 ; i++){
    money = i*bonus;
    console.log("ปีที่",i ,"โบนัส", bonus , "ยอดเงินสะสม", money);
}

console.log("ขอแสดงความยินดี คุณทำงานครบ 20 ปี คุณได้รับโบนัส",money,"บาท");