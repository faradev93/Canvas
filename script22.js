const notation = [{ _radius: Symbol("id1:") }, { _angle: Symbol("id2:") }];
console.log();

class Circle {
  constructor(radius, angle) {
    this[notation[0]._radius] = radius;
    this[notation[1]._angle] = angle;
  }
}

const c = new Circle(10, 20);

console.log(c);
console.log(c._radius);

let sym1 = Symbol("id");
let sym2 = Symbol();
console.log(sym1, sym2);
console.log(typeof sym1);

const key = Object.getOwnPropertySymbols(c)[0];

console.log(key[0]);
console.log(c[key]);
