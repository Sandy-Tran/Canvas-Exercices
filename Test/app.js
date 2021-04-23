var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.moveTo(20, 20);
ctx.lineTo(80, 20);
ctx.lineTo(80, 50);
ctx.lineTo(20, 50);
ctx.lineTo(20, 20);
ctx.stroke();
ctx.closePath();

// ctx.strokeStyle = "red"; //pour faire un carré plein remplacer stroke par fill
// ctx.strokeRect(10, 10, 50, 50);
