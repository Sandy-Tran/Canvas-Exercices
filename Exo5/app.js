var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.fillStyle = "lightgrey";
ctx.moveTo(100, 200);
ctx.quadraticCurveTo(200, 120, 300, 200);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "lightgrey";
ctx.moveTo(100, 200);
ctx.quadraticCurveTo(200, 280, 300, 200);
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = "white";
ctx.moveTo(160, 170);
ctx.quadraticCurveTo(200, 80, 240, 170);
ctx.moveTo(240, 170);
ctx.quadraticCurveTo(200, 150, 160, 170);
ctx.stroke();
ctx.fillStyle = "white";
ctx.fill();





// ctx.beginPath();
// ctx.fillStyle = "lightgrey";
// ctx.moveTo(100, 200);
// ctx.bezierCurveTo(100, 160, 200, 160, 200, 200);
// ctx.fill();
