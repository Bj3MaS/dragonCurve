const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const valueDiv = document.getElementById("value");

const width = canvas.width / 4;
const height = canvas.height / 3;

const startValue = 3;
const baseLength = canvas.width / 2.5;
const startAngle = 0;
const backgroundColor = "#808080"
const lineColor = "white";
const lineWidth = 3;

let length = baseLength / (Math.sqrt(2) ** (startValue - 1));
var x = width;
var y = height;
var dir = startAngle;

ctx.fillStyle = backgroundColor;
ctx.fillRect(0, 0, canvas.width, canvas.height)
rotate(Math.PI / 4 * startValue)
forward();
dragon(startValue,startValue);
valueDiv.innerHTML = startValue;

document.getElementById("input").oninput = function() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  valueDiv.innerHTML = this.value;

  x = width;
  y = height;
  dir = startAngle;

  rotate(Math.PI / 4 * this.value)
  length = baseLength / (Math.sqrt(2) ** (this.value - 1));
  forward();
  dragon(this.value,this.value);
}

function dragon(num,num2) {
  if (num > 0 || num > 2) {
    dragon(num - 1, num -1);
    rotate(-Math.PI / 2);
    nogard(num-1,num2-1);
    forward();
    rotate(-Math.PI / 2);
  }

}

function nogard(num,num2) {
  if (num > 0 || num2 > 0){
      rotate(Math.PI / 2);
      forward();
      dragon(num-1,num2-1);
      rotate(Math.PI / 2);
      nogard(num-1,num2 - 1);
  }


}

function forward() {
  ctx.beginPath();
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = lineColor;
  ctx.moveTo(x, y);

  //Kalkuler nye x og y
  x = x + Math.cos(dir) * length;
  y = y + Math.sin(dir) * length;

  ctx.lineTo(x, y);
  ctx.stroke(); // Draw it
}

function rotate(angle) {
  dir += angle;
}
