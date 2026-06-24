let score: number = 100;
let grade: string;

if (score < 0 || score > 100) {
    console.log("ทำงานผิดพลาด เนื่องจากคะแนนน้อยกว่า 0 หรือมากกว่า 100");
} else {
    if (score >= 80) {
        grade = "A";
    } else if (score >= 70) {
        grade = "B";
    } else if (score >= 60) {
        grade = "C";
    } else if (score >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    console.log(`คะแนน: ${score} | เกรด: ${grade}`);
}