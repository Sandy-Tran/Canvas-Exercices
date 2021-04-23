var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

//HEAD OF THE BISCUIT
ctx.fillStyle = "#976F10";
ctx.beginPath();
ctx.arc(200, 200, 60, 0, Math.PI * 2);
ctx.fill();

//LEFT EYE OF THE BISCUIT
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(180, 190, 10, 0, Math.PI * 2);
ctx.fill();

//RIGHT EYE OF THE BISCUIT
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(220, 190, 10, 0, Math.PI * 2);
ctx.fill();

//LEFT EYEBROW OF THE BISCUIT
ctx.strokeStyle = "#459CE1";
ctx.lineWidth= 4;
ctx.beginPath();
ctx.moveTo(190, 170);
ctx.quadraticCurveTo(180, 160, 170, 170);
ctx.stroke();

//RIGHT EYEBROW OF THE BISCUIT
ctx.strokeStyle = "#459CE1";
ctx.lineWidth= 4;
ctx.beginPath();
ctx.moveTo(210, 170);
ctx.quadraticCurveTo(220, 160, 230, 170);
ctx.stroke();

//LIPS
ctx.strokeStyle = "red";
ctx.lineWidth= 5;
ctx.beginPath();
ctx.moveTo(220, 210);
ctx.quadraticCurveTo(200, 230, 180, 210);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(220, 210);
ctx.quadraticCurveTo(200, 270, 180, 210);
ctx.stroke();

//ARMS
ctx.strokeStyle = "#976F10";
ctx.beginPath();
ctx.moveTo(70, 250);
ctx.lineTo(320, 250);
ctx.arc(330, 265, 15, 1.5 * Math.PI, Math.PI * 0.5, false);
ctx.stroke();
ctx.lineTo(70, 280);
ctx.stroke();
ctx.arc(70, 265, 15, 1.5 * Math.PI, Math.PI * 0.5, true);
ctx.stroke();
ctx.fillStyle = "#976F10";
ctx.fill();

//BODY
ctx.fillStyle = "#976F10";
ctx.beginPath();
ctx.moveTo(140, 280);
ctx.lineTo(140, 500);
ctx.arc(160, 500, 20, Math.PI, Math.PI * 2 , true);
ctx.lineTo(180, 450);
ctx.arc(200, 450, 20, Math.PI, Math.PI * 2 , false);
ctx.lineTo(220, 500);
ctx.arc(240, 500, 20, Math.PI, Math.PI * 2 , true);
ctx.lineTo(260, 280);
ctx.fill();


//BUTTONS
ctx.fillStyle = "purple";
ctx.beginPath();
ctx.moveTo(200, 270);
ctx.arc(200, 280, 10, 0, Math.PI * 2);
ctx.moveTo(200, 310);
ctx.arc(200, 320, 10, 0, Math.PI * 2);
ctx.fill();

//DECORATION
ctx.strokeStyle ="white";
ctx.beginPath();
ctx.moveTo(140, 370);
ctx.arc(150, 370, 10, Math.PI, Math.PI * 2, false);
ctx.arc(170, 370, 10, Math.PI, Math.PI * 2, true);
ctx.arc(190, 370, 10, Math.PI, Math.PI * 2, false);
ctx.arc(210, 370, 10, Math.PI, Math.PI * 2, true);
ctx.arc(230, 370, 10, Math.PI, Math.PI * 2, false);
ctx.arc(250, 370, 10, Math.PI, Math.PI * 2, true);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(75, 250);
ctx.arc(75, 255, 5, 1.5 * Math.PI, 0.5 * Math.PI, false);
ctx.arc(75, 265, 5, 1.5 * Math.PI, 0.5 * Math.PI, true);
ctx.arc(75, 275, 5, 1.5 * Math.PI, 0.5 * Math.PI, false);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(320, 250);
ctx.arc(320, 255, 5, 1.5 * Math.PI, 0.5 * Math.PI, true);
ctx.arc(320, 265, 5, 1.5 * Math.PI, 0.5 * Math.PI, false);
ctx.arc(320, 275, 5, 1.5 * Math.PI, 0.5 * Math.PI, true);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(140, 500);
ctx.arc(145, 500, 5, Math.PI, 2 * Math.PI, true);
ctx.arc(155, 500, 5, Math.PI, 2 * Math.PI, false);
ctx.arc(165, 500, 5, Math.PI, 2 * Math.PI, true);
ctx.arc(175, 500, 5, Math.PI, 2 * Math.PI, false);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(220, 500);
ctx.arc(225, 500, 5, Math.PI, 2 * Math.PI, false);
ctx.arc(235, 500, 5, Math.PI, 2 * Math.PI, true);
ctx.arc(245, 500, 5, Math.PI, 2 * Math.PI, false);
ctx.arc(255, 500, 5, Math.PI, 2 * Math.PI, true);
ctx.stroke();

ctx.strokeStyle ="white";
ctx.lineWidth= 3;
ctx.beginPath();
ctx.moveTo(230, 430);
ctx.lineTo(228, 460);
ctx.stroke();
ctx.moveTo(240, 430);
ctx.lineTo(245, 460);
ctx.stroke();
ctx.moveTo(250, 430);
ctx.lineTo(255, 460);
ctx.stroke();
ctx.moveTo(150, 430);
ctx.lineTo(145, 460);
ctx.stroke();
ctx.moveTo(160, 430);
ctx.lineTo(157, 460);
ctx.stroke();
ctx.moveTo(170, 430);
ctx.lineTo(175, 460);
ctx.stroke();