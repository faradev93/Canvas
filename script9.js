const numbers = [2, 3, 4, 2, 1];
let sum = numbers.reduce((a, b) => {
  return a + b;
});
console.log(sum);
//a=2 b==3
const numbers2 = [
  { id: 3, name: "ali" },
  { id: 5, name: "feri" },
  { id: 1, name: "Abbas" },
  { id: 2, name: "ghol" },
  { id: 4, name: "akbar" },
];
const sort = numbers2.sort((a, b) => {
  return a.id - b.id;
});
const sort2 = numbers2.sort((a, b) => {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  else return 0;
});
console.log(sort);
console.log(sort2);
