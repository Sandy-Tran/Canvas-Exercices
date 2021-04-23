const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.strokeStyle = "red";
// ctx.moveTo(20, 20);
// ctx.lineTo(80, 20);
// ctx.lineTo(80, 50);
// ctx.lineTo(20, 50);
// ctx.lineTo(20, 20);
// ctx.stroke();
// ctx.closePath();


    // ctx.beginPath();
    // ctx.strokeStyle = "red";
    // ctx.moveTo(100, 100);
    // ctx.lineTo(140, 100);
    // ctx.lineTo(140, 60);
    // ctx.lineTo(250, 60);
    // ctx.lineTo(250, 100);
    // ctx.lineTo(290, 100);
    // ctx.lineTo(290, 130);
    // ctx.lineTo(100, 130);
    // ctx.lineTo(100, 100);
    // ctx.stroke();
    // ctx.closePath();

    
    // (function draw() {
        ctx.fillStyle = "pink";
        ctx.fillRect(100, 100, 130, 50);
        ctx.fillRect(70, 140, 190, 40);
        ctx.fillStyle = "white";
        ctx.fillRect(110, 110, 60, 30);
        ctx.fillRect(180, 110, 40, 30);
    // })();

    // (function drawCircle() {
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(100, 180, 20, 0, Math.PI * 2, false);
        ctx.arc(230, 180, 20, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.fillStyle = "grey";
        ctx.beginPath();
        ctx.arc(100, 180, 10, 0, Math.PI * 2, false);
        ctx.arc(230, 180, 10, 0, Math.PI * 2, false);
        ctx.fill();
    // })();
    

