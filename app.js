var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");

canvas.width = 1200;
canvas.height = 700;

/*
For fullscreen:
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
*/

var numStars = 500;
var stars = [];
var size = 1;
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;

var speed = 5;

for (var i = 0; i < numStars; i++) {
    stars[i] = new Star();
}

function Star() {
    this.x = Math.random() * canvas.width;      // x location
    this.y = Math.random() * canvas.height;     // y location
    this.z = Math.random() * canvas.width;      // z location (depth of star)

    this.move = function() {
        this.z = this.z - speed;
        if (this.z <= 0) {
            this.z = canvas.width;
        }
    }

    this.show = function() {
        var x, y, s;
        x = (this.x - centerX) * (canvas.width / this.z);
        x = x + centerX;

        y = (this.y - centerY) * (canvas.width / this.z);
        y = y + centerY;

        s = size * (canvas.width / this.z);

        c.beginPath();
        c.fillStyle = "white";
        c.arc(x, y, s, 0, Math.PI * 2);
        c.fill();
    }
}

function draw() {
    c.fillStyle = "black";
    c.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < numStars; i++) {
        stars[i].show();
        stars[i].move();
    }
}

function update() {
    draw();
    window.requestAnimationFrame(update);
}
update();