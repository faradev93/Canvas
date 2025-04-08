const numbers = [
  { id: 3, name: "ali" },
  { id: 5, name: "feri" },
  { id: 1, name: "Abbas" },
  { id: 2, name: "ghol" },
  { id: 4, name: "akbar" },
];
// numbers.sort((x, y) => {
//   x.name = "";
// });
// console.log(numbers);

const items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];
items.sort((x, y) => {
  const nameA = x.name.toUpperCase();
  const nameB = y.name.toUpperCase();

  if (nameA < nameB) {
    return -1;
  } else if (nameA > nameB) {
    return 1;
  } else {
    return 0;
  }
});
console.log(items);

numbers.sort((a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  else {
    return 0;
  }
});
console.log(numbers);

numbers.sort((n, m) => {
  return n.id - m.id;
});

console.log(numbers);
const names = ["Williams", "James", "Alex", "Mason", "Ella", "Jackson"];
names.reverse();
names.sort();
console.log(names);
const numbers2 = [8, -2, 10, 100, 19, -4, -10];
numbers2.sort((a, b) => {
  return a - b;
});
numbers2.reverse();
console.log(numbers2);

const results = [
  { name: "Edward", score: 87 },
  { name: "Williams", score: 50 },
  { name: "Andy", score: 45 },
  { name: "Ella", score: 75 },
  { name: "Alex", score: 68 },
  { name: "Mason", score: 37 },
];
const resaultCopy = { ...results };


results.sort((x, y) => {
  const nameA = x.name.toUpperCase();
  const nameB = y.name.toUpperCase();
  if (nameA < nameB) return -1;
  if (name > nameB) return 1;
  else return 0;
});
console.log(results);

results.sort((a, aa) => {
    return a.score - aa.score;
  });
  

console.log(results);



