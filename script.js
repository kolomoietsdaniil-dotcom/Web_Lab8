const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let topRectMoved = false;     
let leftRectMoved = false;   
let bottomCircleScaled = false; 

let isTransformed = false;


function draw() {

ctx.lineWidth = 2;
ctx.font = '14px Arial italic';


ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = 'black';
// X
ctx.beginPath();
ctx.moveTo(50,250);
ctx.lineTo(500,250);
ctx.stroke();
ctx.fillText('X', 500, 275);

// Y
ctx.beginPath();
ctx.moveTo(200,90);
ctx.lineTo(200,400);
ctx.stroke();
ctx.fillText('Y', 215, 130);

ctx.beginPath();
ctx.moveTo(505, 250);
ctx.lineTo(495, 245);
ctx.lineTo(495, 255);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(200, 80);
ctx.lineTo(195, 90);
ctx.lineTo(205, 90);
ctx.closePath();
ctx.fill();

// X(-2)
ctx.beginPath();
ctx.moveTo(100,255);
ctx.lineTo(100,245);
ctx.stroke();
ctx.fillText('-2', 90, 270);

// X(-1)
ctx.beginPath();
ctx.moveTo(150,255);
ctx.lineTo(150,245);
ctx.stroke();
ctx.fillText('-1', 140, 270);

// (0,0)
ctx.fillText('0', 187, 270);
// X(1)
ctx.beginPath();
ctx.moveTo(250,255);
ctx.lineTo(250,245);
ctx.stroke();
ctx.fillText('1', 245, 270);

// X(2)
ctx.beginPath();
ctx.moveTo(300,255);
ctx.lineTo(300,245);
ctx.stroke();
ctx.fillText('2', 305, 270);
// X (3)
ctx.beginPath();
ctx.moveTo(350,255);
ctx.lineTo(350,245);
ctx.stroke();
ctx.fillText('3', 355, 270);
// X (4)
ctx.beginPath();
ctx.moveTo(400,255);
ctx.lineTo(400,245);
ctx.stroke();
ctx.fillText('4', 405, 270);
// X(5)
ctx.beginPath();
ctx.moveTo(450,255);
ctx.lineTo(450,245);
ctx.stroke();
ctx.fillText('5', 455, 270);

// Y(2)
ctx.beginPath();
ctx.moveTo(205,150);
ctx.lineTo(195,150);
ctx.stroke();
ctx.fillText('2', 185, 165);
// Y(1)
ctx.beginPath();
ctx.moveTo(205,200);
ctx.lineTo(195,200);
ctx.stroke();
ctx.fillText('1', 210, 220);
// Y (-1)
ctx.beginPath();
ctx.moveTo(205,300);
ctx.lineTo(195,300);
ctx.stroke();
ctx.fillText('-1', 185, 320);
// Y (-2)
ctx.beginPath();
ctx.moveTo(205,350);
ctx.lineTo(195,350);
ctx.stroke();
ctx.fillText('-2', 185, 370);





ctx.fillStyle = 'blue';

ctx.fillRect(200, 150, 50, 50);
ctx.strokeRect(200, 150, 50, 50);

ctx.fillRect(450, 150, 50, 50);
ctx.strokeRect(450, 150, 50, 50);

ctx.fillRect(200, 300, 50, 50);
ctx.strokeRect(200, 300, 50, 50);

ctx.fillRect(350, 300, 50, 50);
ctx.strokeRect(350, 300, 50, 50);

ctx.fillRect(450, 300, 50, 50);
ctx.strokeRect(450, 300, 50, 50);

ctx.beginPath();
ctx.moveTo(250,250);
ctx.lineTo(300,150);
ctx.lineTo(350,250);
ctx.lineTo(250,250);
ctx.closePath();
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(400, 200, 50, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();


if (topRectMoved) {
        ctx.fillRect(250, 70, 150, 50);
        ctx.strokeRect(250, 70, 150, 50);
    } else {
        ctx.fillRect(250, 100, 150, 50);
        ctx.strokeRect(250, 100, 150, 50);
    }
if (leftRectMoved) {
        ctx.fillRect(50,150,100,50);
        ctx.strokeRect(50,150,100,50)
    } else {
        ctx.fillRect(100, 200, 100, 50);
        ctx.strokeRect(100, 200, 100, 50);
    }
if (bottomCircleScaled) {
        ctx.save();
        ctx.translate(300, 300);
        ctx.scale(0.6, 0.6);
        ctx.beginPath();
        ctx.arc(0, 0, 50, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    } else {
        ctx.beginPath();
        ctx.arc(300, 300, 50, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }
}

canvas.addEventListener('click', (event) => {
    const x = event.offsetX; 
    const y = event.offsetY; 

    if (x >= 250 && x <= 400 && y >= 100 && y <= 150) {
        topRectMoved = !topRectMoved;
    }

    if (x >= 100 && x <= 200 && y >= 200 && y <= 250)
        leftRectMoved = !leftRectMoved;

    if (Math.hypot(x - 300, y - 300) <= 50) {
        bottomCircleScaled = !bottomCircleScaled;
    }

   

    draw(); 
});

draw();