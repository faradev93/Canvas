//
let x = 0;
//

class Point {
  x = 0;
  y = 0;
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Circle {
  constructor(x, y, r) {
    this.center = new Point(x, y);
    this.radius = r;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.closePath();
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
//
class Text {
  constructor(text, x, y) {
    this.position = new Point(x, y);
    this.text = text;
  }
  draw(ctx) {
    ctx.fillText(this.text, this.position.x, this.position.y);
  }
}
class Rectangle {
  constructor(x, y, width, height) {
    this.topLeft = new Point(x - width / 2, y - height / 2);
    this.topRight = new Point(x + width / 2, y - height / 2);
    this.bottomLeft = new Point(x - width / 2, y + height / 2);
    this.bottomRight = new Point(x + width / 2, y + height / 2);
  }
  draw(ctx) {
    let l1 = new Line();
    let l2 = new Line();
    let l3 = new Line();
    let l4 = new Line();
    l1.setPoints(this.topLeft, this.topRight);
    l2.setPoints(this.bottomLeft, this.bottomRight);
    l3.setPoints(this.topRight, this.bottomRight);
    l4.setPoints(this.topLeft, this.bottomLeft);
    l1.draw(ctx);
    l2.draw(ctx);
    l3.draw(ctx);
    l4.draw(ctx);
  }
}
class Gauge {
  constructor(x, y, value) {
    this.center = new Point(x, y);
    
  }
}
//

window.onload = function (e) {
  let canvas = document.getElementById("myCanvas");
  let ctx = canvas.getContext("2d");
  function render() {
    ctx.clearRect(0, 0, 300, 300);
    //Draw Circle 1
    const c1 = new Circle(0, 0, 30);
    c1.draw(ctx);
    // Draw Circle2
    const c2 = new Circle(5, 5, 50 + x);
    c2.draw(ctx);
    // Draw Line
    const l1 = new Line(150, 150, 300, 300);
    l1.draw(ctx);
    //Draw Text
    const text = new Text("Test", 50, 150);
    text.draw(ctx);
    //
    const rectangle = new Rectangle(150, 150, 100 + x, 70);
    rectangle.draw(ctx);
    //
    setTimeout(() => {
      x = x + 1;
      if (x >= 300) {
        x = 0;
      }
      render();
    }, 10);
  }
  render();
};
