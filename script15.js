"use strict";
//Prototype vs Intanse Member
function Circle(rad) {
  this.radius = rad;
}
const c1 = new Circle(10);
const c2 = new Circle(20);

Circle.prototype.draw = function (s) {
  console.log(`ey Lanati${s}`, `& circle radius${this.radius}`);
};
console.log(c1);

//
function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}
Rectangle.prototype.toString = function () {
  return `Rectangle with Width ${this.width}`;
};

Rectangle.prototype.area = function () {
  let area = this.length * this.width;
  console.log(
    `مساحت مستطیل با طول ${this.length}و عرض ${this.width}برابر است با ${area}`
  );
};

const newRectangle = new Rectangle(5, 20);
console.log(newRectangle);
newRectangle.area();
Rectangle.prototype.isSquare = function () {
  if (this.length == this.width) {
    console.log(`این مربع هست`);
  } else {
    let area = this.length * this.width;
    console.log(
      `مساحت مستطیل با طول ${this.length}و عرض ${this.width}برابر است با ${area}`
    );
  }
};
const rectangle2 = new Rectangle(10, 100);
rectangle2.isSquare();

const rec2 = new Rectangle(12, 10);
console.log(rec2);
console.log(rec2.toString());
const rec3 = new Rectangle(50, 11);
console.log(rec3.toString());
console.log(rec3);
