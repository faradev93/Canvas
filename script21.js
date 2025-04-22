function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}
///Class Base Shape
class Shape {
  constructor(a) {
    this.angle = a;
  }
}
Shape.prototype.speak = function () {
  console.log(`Ey KOsKESH`);
};

///
//Circle Class

class Animal {
  speak() {
    console.log(`i am Animal`);
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  draw() {
    console.log(this.radius);
  }
  parse() {}
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
  static random() {
    const rand = Math.round(Math.random() * this.radius);
    return rand;
  }
}

const newCircle = Circle.parse('{"radius":10}');

const circle2 = Circle.parse('{"radius":25}');
console.log(circle2);

const circle3 = new Circle(5);
console.log(circle3);

const circle4 = Circle.random();
console.log(circle4);
