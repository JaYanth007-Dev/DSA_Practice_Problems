
for (let index = 1; index <= 5; index++) {
  let row = " ";
  for (let j = 1; j <=5; j++) {
    row = row + " * ";
  }
  console.log(row);
}



for (let index = 1; index <= 5; index++) {
  let row = " ";
  for (let j = 1; j <=index; j++) {
    row = row + " * ";
  }
  console.log(row);
}



 for (let i = 1; i <= 5; i++) {
   let row = "";
   for (let j = 1; j <= 5 - i; j++) {
     row += " ";
   }
   for (let k = 1; k <= i; k++) {
     row += "*";
   }
   console.log(row);
 }
