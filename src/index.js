import Paddle from "/src/paddle";
import InputHandler from "/src/input";

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");

const GAME_WIDTH = 1200;
const GAME_HEIGHT = 550;

ctx.clearRect(0, 0, 1200, 550);

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);

new InputHandler();
paddle.draw(ctx)
let lastTime = 0;

//game loop

function gameLoop(timeStamp) {
  let deltaTime = timeStamp - lastTime;
  lastTime = timeStamp;

  ctx.clearRect(0, 0, 1200, 550);
  paddle.update(deltaTime);
  paddle.draw(ctx);
  requestAnimationFrame(gameLoop);
}

gameLoop();
