// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// Ball constructor
function Ball(x, y, velX, velY, color, size) {
    this.x = x; // x coord
    this.y = y; // y coord
    this.velX = velX; // horiz velocity
    this.velY = velY; // vert velocity
    this.color = color; // ball color
    this.size = size; // radius size in pixels
}

// Ball prototypes
Ball.prototype.draw = function() {
    ctx.beginPath(); // state we want to draw the shape on the canvas
    ctx.fillStyle = this.color; // define color of the shape
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI); // trace an arc shape. 2 * PI is equivalent to 360 degrees in radians, hence the full circle
    ctx.fill();
}

Ball.prototype.update = function() {
    // ball is going off the right edge
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }
  
    // ball is going off the left edge
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
  
    // ball is going off the bottom edge
    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }
  
    // ball is going off the top edge
    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }
  
    this.x += this.velX;
    this.y += this.velY;
}

Ball.prototype.collisionDetect = function() {
    // check every other ball to see if it collided with
    // the current ball.
    for (let j = 0; j < balls.length; j++) {
      if (!(this === balls[j])) {
        // check collision of two circles
        const dx = this.x - balls[j].x;
        const dy = this.y - balls[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
  
        if (distance < this.size + balls[j].size) {
          balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) +')';
        }
      }
    }
}

// add balls to the canvas and animate
let balls = [];

// create new instance of Ball() using random values
// if there are 25 balls on the screen, no more will appear
while (balls.length < 25) {
  let size = random(10,20);
  let ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size,width - size),
    random(0 + size,height - size),
    random(-7,7),
    random(-7,7),
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
    size
  );

  balls.push(ball);
}

// animation loop
function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);
  
    // loop through balls array and run the draw, update and collision functions
    for (let i = 0; i < balls.length; i++) {
      balls[i].draw();
      balls[i].update();
      balls[i].collisionDetect();
    }
  
    requestAnimationFrame(loop);
}
loop();