function interest(participal, rate = 3.5, years = 5) {
  for (let i in arguments) console.log(arguments[i]);
  return ((participal * rate) / 100) * years;
}
function interest2(participal, rate = 4, year = 2) {
  for (let i in arguments) {
    // console.log(arguments[i]);
    return ((participal * rate) / 100) * year;
  }
}
console.log(interest2(5000));

const person = {
  fname: "ali",
  lname: "Laghaie",
  get fullname() {
    return this.fname + this.lname;
  },
  set fullname(value) {
    const parts = value.split(" ");
    this.fname = parts[0];
    this.lname = parts[1];
  },
};
person.fullname = "reza tajari";
console.log(person);
//getters=> access propertis
//setters=> change (mutate)
const book = {
  title: 1984,
  author: "George Orwell",
  set info(inputs) {
    const part = inputs.split(" ");
    this.title = part[0];
    this.author = part[1];
  },
  get info() {
    return `Book: ${this.title} , Author:${this.author}`;
  },
};
book.info = "Ghahve 2025";
console.log(book);
//
const book2 = {
  title: "",
  author: "",
  year: 0,
  get bookInfo() {
    return `Book: ${this.title} , Author:${this.author}, Year: ${this.year}`;
  },
  set bookInfo(input) {
    const part = input.split(",").map((x) => x.trim());
    this.title = part[0];
    this.author = part[1];
    this.year = part[2];
  },
};
book2.bookInfo = "Robert Kiosaki    ,       Rich Dad & Poor Dad,   2023";
console.log(book2);
function sum() {
  let total = 0;
  for (let i in arguments) {
    total += arguments[i];
  }
  return total;
}
