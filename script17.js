function Valed(input, ...arg) {
  if (
    typeof input == "object" &&
    typeof input == "number" &&
    Array.isArray(input) == true
  ) {
    return `Emkanesh Nist`;
  } else if (typeof input === "string") {
    let strings = input.trim();
    this.father = strings;
  }
}

Valed.prototype.Children = function () {
  return this.father + 1;
};
const newValed = new Valed("      faraz ");
console.log(newValed);

function Children() {}
Children.prototype.Mother = function () {
  console.log("Name Mother:::)))))");
};

Children.prototype = Object.create(Valed.prototype);
const child2 = new Children();
console.log(child2);