console.log("object");
// document.addEventListener("DOMContentLoaded", function () {
//   let canvas = document.getElementById("feriCanvas");
//   const ctx = canvas.getContext("2d");

//   let initialRadius1 = 50;
//   let initialRadius2 = 30;
//   let radius1 = 50;
//   let radius2 = 30;
//   const centerX = canvas.width / 2;
//   const centerY = canvas.height / 2;

//   function drawCircles() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     ctx.beginPath();
//     ctx.arc(centerX, centerY, radius1, 0, 2 * Math.PI);
//     ctx.fillStyle = "red";
//     ctx.fill();

//     ctx.beginPath();
//     ctx.arc(centerX, centerY, radius2, 0, 2 * Math.PI);
//     ctx.fillStyle = "gray";
//     ctx.fill();
//   }

//   function increaseSize() {
//     if (radius1 >= canvas.width / 2 || radius1 >= canvas.height / 2) {
//       radius1 = initialRadius1;
//       radius2 = initialRadius2;
//     } else {
//       radius1 += 1;
//       radius2 += 1;
//     }

//     drawCircles();
//   }

//   setInterval(increaseSize, 10);
// });

////////////////////////////////////////////////////////////
let xx = 1;

let Circle2 = class {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  draw(context) {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.stroke();
    context.closePath();
  }
};

//
document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById("feriCanvas");
  let context = canvas.getContext("2d");

  function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    //Circle  1
    const circle1 = new Circle2(200, 200, 50 + xx);
    circle1.draw(context);
    setTimeout(() => {
      xx = xx + 1;
      if (xx >= 300) {
        xx = 0;
      }
      render();
    }, 10);
  }
  render();
});
