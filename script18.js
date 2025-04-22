//Circle
function Circle() {}

Circle.prototype.Radius = function (radius) {
  console.log(`${(this.radius = radius)}`);
};

//Shape

function Shape() {}

Shape.prototype.Dot = function () {
  console.log(`Polkadot`);
};

//
Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.constructor = Circle;
const newCircle = new Circle();
console.log(newCircle);
newCircle.Dot();
//
//Dog
function Dog() {}

///Animal
function Animal() {}

Animal.prototype.speak = function () {
  console.log(`I am a Animal`);
};

Animal.prototype.child = function () {
  console.log(`Children's`);
};
//
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function () {
  console.log(`Hap Hap`);
};
//
const myDog = new Dog();
console.log(myDog);
myDog.child();

const newAnimal = new Animal();
console.log(newAnimal);
newAnimal.speak();
//
console.log("heyyyy");
//
//
function Animal2() {}

Animal2.prototype.speak = function () {
  console.log("I am animal");
};

Animal2.prototype.child = function () {
  console.log("Chilren's");
};

//Dogy
function Dogy() {}

Dogy.prototype.speak = function () {
  "Hap Hap";
};

Dogy.prototype = Object.create(Animal2.prototype);
Dogy.prototype.constructor = Dogy;

//Puppy
function Puppy() {}

Puppy.prototype = Object.create(Dogy.prototype);
Puppy.prototype.constructor = Puppy;

Puppy.prototype.cute = function () {
  console.log(`i am super cute`);
};

const newPuppy = new Puppy();
newPuppy.speak();
newPuppy.child();
newPuppy.cute();

console.log(newPuppy);