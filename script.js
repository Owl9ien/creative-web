const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
var radius = canvas.height / 2;

ctx.translate(radius, radius);

radius = radius * 0.90
drawClock();

function drawClock() {
	ctx.arc(0,0,radius,0,2*Math.PI);
	ctx.fillStyle = 'Red';
	ctx.fill();
}





console.log(typeof(drawClock))
console.log(ctx)
console.log(canvas)
console.log(radius)
console.log(typeof(radius))