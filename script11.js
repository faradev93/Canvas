function sum(discount, ...args) {
  const total = args.reduce((a, b) => {
    return a + b;
  }, 0);
  return total * discount;
}
console.log(sum(1, 3, 5, 7, 5));
console.log(sum(0.1, 3, 5, 7, 5));

//
var y = 0;
function st() {
  var t = 1;
}
function start() {
  let arr = [];
  for (var i = 0; i < 5; i++) {
    arr.push(i);
  }
  return arr;
}
console.log(start());
//

const person = {
  fname: "ali",
  lname: "mahmudi",
  get fullName() {
    return `${person.fname} ${person.lname}`;
  },
  set fullName(value) {
    if (typeof value !== "string") throw new Error("ey koskesh String nist");
    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("2 Bakhshi Nist Part'ha");

    this.fname = parts[0];
    this.lname = parts[1];
  },
};

try {
  person.fullName = true;
} catch (e) {
  console.log(e);
}
//
const error = new Error("ارور داریم چ اروری:)))");
const user = {
  firstname: "",
  lastname: "",
  get fullName() {
    return `${user.firstname}${user.lastname}`;
  },
  set fullName(value) {
    if (typeof value !== "string") throw error;
    if (typeof value === NaN) throw error;
    if (typeof value === "number") throw error;
    const parts = value.split(" ");
    this.firstname = parts[0];
    this.lastname = parts[1];
  },
};
user.fullName = "مسعود رضاخانلو";
console.log(user);

const vidoes = {
  title: "Company",
  tags: ["a", "b", "c"],
  showTag() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};

vidoes.showTag();

