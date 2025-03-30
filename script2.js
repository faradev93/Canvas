// window.onload = function (e) {
//   let feriCanvas = document.getElementById("feriCanvas");
//   let context = feriCanvas.getcotext("2d");
// };
let canvas = document.getElementById("feriCanvas");
const ctx = canvas.getContext("2d");

let radius1 = 50;
let radius2 = 30;
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

function drawCircles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius1, 0, 2 * Math.PI);
  ctx.fillStyle = "blue";
  ctx.fill();

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius2, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
}

function increaseSize() {
  radius1 += 1;
  radius2 += 1;

  drawCircles();
}

setInterval(increaseSize, 10);
