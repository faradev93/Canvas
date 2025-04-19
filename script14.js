function Circle(rad) {
  (this.radius = rad),
    (draw = function () {
      console.log(`draw`);
    });
}
const circle2 = new Circle(50);
const circle3 = new Circle(101);
console.log(circle2);
console.log(circle3);

let arr1 = [1];
let arr2 = [2];
console.log(arr1);

const person = {
  name: "faramarz",
  toString() {
    return this.name.toString();
  },
  familyN: "rezakhanlou",
};

const lockPerson = Object.defineProperty(person, "familyN", {
  writable: false,
});
console.log(Object.getPrototypeOf(lockPerson));
let desc = Object.getOwnPropertyDescriptor(person, "name");
console.log(desc);

//prototype vs u


