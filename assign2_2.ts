let books = ["JavaScript Basic", "TypeScript Easy", "HTML CSS"];
let searchBook = "TypeScript Easy";
let found = false;

for (let i = 0; i < 3; i++) {
    if (books[i] == searchBook) {
        found = true;
    }
}
console.log("Library Books");
for (let i = 0; i < 3; i++) {
    console.log(books[i]);
}
if (found == true) {
    console.log("Found: " + searchBook);
} else {
    console.log("Book not found");
}