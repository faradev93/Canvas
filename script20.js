function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function (r) {
  console.log((this.border = r));
  console.log(`Duplicate`);
};

//Circle
function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.draw = function (h) {
  Shape.prototype.duplicate.call(this, h);
  Shape.console.log(`Draw`);
};

//
extend(Circle, Shape);
const newCircle = new Circle(4);
console.log(newCircle);
newCircle.duplicate(55 + 5);

function Square() {}
extend(Square, Shape);

Square.prototype.duplicate = function () {
  console.log(`Duplicate Square`);
};
const shapes = [new Circle(5), new Square()];
console.log(shapes);

for(let shape of shapes){
    shape.duplicate()
}