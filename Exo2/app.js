var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle="#975B5B";
    ctx.strokeStyle="black";
    ctx.lineWidth="3";
    ctx.save();


    // house walls
    ctx.fillStyle = "pink";
    ctx.fillRect(100, 260, 400, 300);
    ctx.strokeRect(100, 260, 400, 300);
    ctx.fill();

    // windows
    ctx.fillStyle="white";
    ctx.fillRect(130, 300, 70, 45);
    ctx.fillRect(205, 300, 70, 45);
    ctx.fillRect(325, 300, 70, 45);
    ctx.fillRect(400, 300, 70, 45);
    ctx.fillRect(130, 350, 70, 45);
    ctx.fillRect(205, 350, 70, 45);
    ctx.fillRect(325, 350, 70, 45);
    ctx.fillRect(400, 350, 70, 45);
    ctx.fillRect(325, 425, 70, 45);
    ctx.fillRect(400, 425, 70, 45);
    ctx.fillRect(325, 475, 70, 45);
    ctx.fillRect(400, 475, 70, 45);

    // door lines
    ctx.beginPath();
    ctx.restore();
    ctx.moveTo(200, 423);
    ctx.lineTo(200, 560);
    ctx.moveTo(140,433);
    ctx.lineTo(140, 560);
    ctx.moveTo(260,434);
    ctx.lineTo(260, 560);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(199,562,140,1.355*Math.PI,1.65*Math.PI); // door arc
    ctx.stroke();

    // door handles
    ctx.beginPath();
    ctx.arc(185,510,5,0,2*Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(215,510,5,0,2*Math.PI);
    ctx.stroke();

    // Draw a triangle for the roof
    ctx.beginPath();
    ctx.moveTo(100,260);
    ctx.lineTo(300,10);
    ctx.lineTo(500,260);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // chimney
    ctx.fillRect(381, 60, 45, 120);
    ctx.strokeRect(381, 60, 45, 140);
    drawEllipse(ctx, 380, 55, 47, 14);
    ctx.fillRect(378, 198, 55, 5);





