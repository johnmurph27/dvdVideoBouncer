var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//context
var c = canvas.getContext('2d');

// Rectange
// c.fillStyle = "blue";
// c.fillRect(100, 100, 50, 50);
// c.fillStyle = "green";
// c.fillRect(200, 100, 50, 50);
// c.fillStyle = "purple";
// c.fillRect(100, 200, 50, 50);

// Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "red";
// c.stroke();

// Arch
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = "orange";
c.stroke();

var x = 200;
var y = 200;
var speed = 1;
var dx = 2;
var dy = 2;
var xRadius = 0;
var yRadius = 0;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    // c.beginPath();
    // c.arc(x, y, 30, 0, Math.PI * 2, false);
    // c.strokeStyle = "orange";
    // c.stroke();
    c.fillStyle = "blue";
    c.fillRect(x, y, 50, 50);
    
    if ( x + 50 > innerWidth || x - xRadius < 0){
        dx = -dx;
    }
    if ( y + 50 > innerHeight || y - yRadius < 0){
         dy = -dy;
    }
    x += dx;
    y += dy;
}

animate();