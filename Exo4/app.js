var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.fillStyle = "#FFC300";
ctx.moveTo(200, 200);
ctx.lineTo(300, 200);
ctx.lineTo(250, 350);
// ctx.lineTo(80, 50);
// ctx.lineTo(20, 50);
// ctx.lineTo(20, 20);
ctx.lineTo(200, 200);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "pink"
ctx.moveTo(200, 200);
ctx.quadraticCurveTo(230, 90, 300, 200);
ctx.fill();



// ctx.strokeStyle = "red"; //pour faire un carré plein remplacer stroke par fill
// ctx.strokeRect(10, 10, 50, 50);


