console.log("Hello, world!");

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix);

// lungimea matricei

console.log(matrix.length);

// lungimea unui array din matrice

console.log(matrix[0].length);

// accesarea unui element din matrice

console.log(matrix[0][0]);

// parcurgerea matricei

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}

// parcurgerea matricei cu forEach

matrix.forEach((row) => {
  row.forEach((element) => {
    console.log(element);
  });
});

// parcurgerea matricei cu map

matrix.map((row) => {
  row.map((element) => {
    console.log(element);
  });
});

// filter pe matrice

let filteredMatrix = matrix.filter((row) => {
  return row[0] > 3;
});

console.log(filteredMatrix);

// sortarea matricei
matrix.sort((a, b) => {
  return a - b;
});
