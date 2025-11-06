for (let index = 1; index <= 5; index++) {
  let row = " ";
  for (let j = 1; j <= index; j++) {
    row = row + " " + index;
  }
  console.log(row);
}

for (let index = 1; index <= 5; index++) {
  let row = " ";
  for (let j = 1; j <= index; j++) {
    row = row + " " + j;
  }
  console.log(row);
}

let n=10
for (let index = 1; index <= n; index++) {
    let row = " ";

    for (let j = 1; j <= n; j++) {
        if (index + j <= n+1) {
            row = row + " " + j;
        }
        else {
            row = row + " ";
        }
    }
  
  console.log(row);
}



