function Circle() {
  let computeOptimumLocation = () => {};
  this.location = { x: 10, y: 20 };
  this.changeLocation = function (in1, in2) {
    this.location.x = in1;
    this.location.y = in2;
  };
}
const circle2 = new Circle();
circle2.changeLocation(100, 200);
console.log(circle2);

class Shape {
  constructor(input1, input2) {
    this.x = input1;
    this.y = input2;
  }
}
const shape1 = new Shape(5, 10);
console.log(shape1);

class Circles {
  constructor(input1, input2, input3) {
    this.x = new Shape(input1, input2);
    this.y = new Shape(input2, input3);
  }
}
const Circle22 = new Circles(20, 40, 60);
console.log(Circle22);


