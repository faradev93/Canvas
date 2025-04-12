//

//
ArraytoObject(
  [
    {
      name: "Amad",
      age: 32,
      isvisible: false,
      money: [100, 50, 1000, 5000],
    },
    {
      name: "Wayne",
      age: 29,
      isvisible: true,
      money: [1000, 10000, 5250, 6000, 4000, 8700],
    },
    { name: "Erick", age: 36, isvisible: true, money: [8900, 2250, 3650, 500] },
    {
      name: "John",
      age: 25,
      isvisible: true,
      money: [5650, 51450, 6000, 8000, 7250, 550],
    },
    { name: "sara", age: 21, isvisible: true, money: [550, 1450] },
  ],
  function (key) {
    return key.name;
    return key.name;
  }
);

function ArraytoObject(array, input2) {
  //
  let object = {};
  for (let itemAge in array) {
    if (array[itemAge].age > 30) object[array[itemAge].name] = array[itemAge];
  }
  console.log(object);
  //
  console.log(`PART-2`);

  let object2 = {};
  for (let item in array) {
    console.log(array[item].money);
    object2[array[item].name] = array[item].money.reduce((a, b) => {
      return a + b;
    }, 0);
  }
  console.log(object2);

  console.log(`part-3`);
  for (let item in array) {
    console.log(array[item]);
  }
}
//
const calc = document.getElementById("calculator");
const paragraph = document.getElementById("paragraph");
calc.oncopy = function () {
  alert(`copy shod`);
};
console.log(paragraph);
