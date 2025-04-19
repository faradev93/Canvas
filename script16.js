function Circle(rad) {
  //instance Member
  this.radius = rad;
  this.descript = true;
  this.move = function () {
    console.log("move", this.draw());
  };
}

const circle2 = new Circle(99);

Circle.prototype.draw = function () {
  console.log(this.radius + "koskesh");
};
console.log(circle2);
circle2.draw();

Circle.prototype.fara = function () {
  console.log(`faramarz`);
};
const circle3 = new Circle(998);

console.log(circle3);

const description = Object.getOwnPropertyDescriptor(circle2, "radius");
const lockCircle3 = Object.defineProperty(circle3, "radius", {
  configurable: false,
  enumerable: false,
  writable: false,
});
console.log(description);
circle3.radius = 5002;
console.log(circle3);

let lockCircle = Object.getOwnPropertyDescriptor(circle3, "radius");
console.log(lockCircle);