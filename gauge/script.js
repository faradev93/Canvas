class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Circle {
  constructor(x, y, radius, angle = 1) {
    this.center = new Point(x, y);
    this.radius = radius;
    this.angle = angle;
  }
  draw(context) {
    context.beginPath();
    context.arc(
      this.center.x,
      this.center.y,
      this.radius,
      2 * Math.PI * this.angle,
      0
    );
    context.stroke();
    context.fillStyle = "#b5dab7";
    context.fill();
  }
}

class Line {
  constructor(x1, y1, x2, y2) {
    this.p1 = new Point(x1, y1);
    this.p2 = new Point(x2, y2);
  }
  setPoints(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }
  draw(ctx) {
    ctx.moveTo(this.p1.x, this.p1.y);
    ctx.lineTo(this.p2.x, this.p2.y);
    ctx.stroke();
  }
}
class Gauge {
  constructor(x, y, v, radius) {
    this.center = new Point(x, y);
    this.v = 1 - v;
    this.radius = radius;
  }
  draw(context) {
    let newCircle = new Circle(this.center.x, this.center.y, this.radius);
    newCircle.draw(context);

    const h = Math.sin(this.v * Math.PI) * this.radius;
    const y = this.radius * 2 - h;
    const w = Math.cos(this.v * Math.PI) * this.radius;
    const x = this.radius + w;

    const line = new Line(this.center.x, this.center.y, x, y);
    line.draw(context);
  }
}
// let newgauge=new Gauge

//
window.onload = function () {
  let gauge = document.getElementById("gauge");
  let context = gauge.getContext("2d");
  function render() {
    // Gauge
    const gauge = new Gauge(200, 400, 0.6, 200);
    gauge.draw(context);
  }
  render();
};

class Person {
  name = null;
  father = null;
  mother = null;
  children = [];

  constructor(name, father, mother, children) {
    this.name = name;
    this.father = father;
    this.mother = mother;
    this.children = children;
  }
  setChildren(children) {
    this.children = children;
  }
}
const Hamzeh = new Person("Hamzeh");

const Soqra = new Person("Soqra");

const Jafar = new Person("Jafar", Hamzeh, Soqra, [
  new Person("sadegh"),
  new Person("Hamidreza"),
]);

console.log(Jafar);

const Hassan = new Person("Hassan", Hamzeh, Soqra);
Hassan.setChildren([
  new Person("Faramarz"),
  new Person("Masoud"),
  new Person("Farzaneh"),
]);

Hamzeh.setChildren([Hassan, Jafar]);
console.log("Vajalk:", Hamzeh);
