var str = "The man who take my book.";

// Bài 1. Tim vi tri cua tu dau tien chua chu "o"
// let findO = str.indexOf("o")
// let takeW = str.slice(0, findO)
// let findW = takeW.lastIndexOf(" ") + 1
// console.log(`Câu 1:`, findW);

// // Bài 2. Thay the "my book" thanh "my bag"
// str = str.replace("my book", "my bag");
// console.log(`Câu 2:`, str);

// // Bài 3. Them chuoi sau vao chuoi ban dau: "I don't know that man."
// var add = str.concat(`
// I don't know that man.`);   /* Tự làm */
// console.log(add);

// str += "I don't know that man";    /* Tối ưu optimize */
// console.log(`Câu 3:`, str);

// // Bài 4. Hightlight "my bag" with 2 star like: "*my bag*"
// var findhighLight = replace.match(/my bag/);
// var done = replace.replace(findhighLight[0], "*my bag*");
// console.log(done);

// Bài 5. Tach chuoi thanh mang va tim nhung tu chua ky tu "a"
// var split = str.split(" ");

// var word = "";
// for (var i = 0; i < split.length; i++) {      /* Tự làm */
//   if (split[i].includes("a")) {
//     word += `${split[i]} `;
//   }
// }
// console.log(word);

// let arr = str.split(" ");
// let list = [];

// for (var val of arr) {                        /* Tối ưu optimize */
//   if (val.includes("a")) list.push(val);
// }

// console.log(list);
