//

ArraytoObject(
  [
    {
      name: "Mamareza",
      age: 32,
      isvisible: false,
      money: [100, 50, 1000, 5000],
    },
    {
      name: "ali",
      age: 29,
      isvisible: true,
      money: [1000, 10000, 5250, 6000, 4000, 8700],
    },
    { name: "Omid", age: 36, isvisible: true, money: [8900, 2250, 3650, 500] },
    {
      name: "MOhadese",
      age: 25,
      isvisible: true,
      money: [5650, 51450, 6000, 8000, 7250, 550],
    },
    { name: "sara", age: 21, isvisible: true, money: [550, 1450] },
  ],
  function (key) {
    return key.isvisible;
  }
);
//
function ArraytoObject(array, key) {
  let object1 = {};
  let object2 = {};
  let object3 = {};
  let object4 = { true: [], false: [] };

  let totalMoney = 0;
  for (let item of array) {
    // console.log(item);
    object1[item.name.toUpperCase()] = item;

    totalMoney = item.money.reduce((x, y) => {
      return x + y;
    }, 0);
    object2[totalMoney] = item;
    object3[key(item)] = item;
    object4[key(item)].push(item);
  }
  console.log(object1);
  console.log(object2);
  console.log(object3);
  console.log(object4);
}

//

//20:{name:"ali",age:20} ,30:{name:"farhad",age:30
const users = [
  {
    name: "Mamareza",
    age: 32,
    isvisible: false,
    money: [100, 50, 1000, 5000],
  },
  {
    name: "ali",
    age: 29,
    isvisible: true,
    money: [1000, 10000, 5250, 6000, 4000, 8700],
  },
  { name: "Omid", age: 36, isvisible: true, money: [8900, 2250, 3650, 500] },
  {
    name: "MOhadese",
    age: 25,
    isvisible: true,
    money: [5650, 51450, 6000, 8000, 7250, 550],
  },
  { name: "Sara", age: 21, isvisible: true, money: [550, 1450] },
];
