export default class Paddle {
    constructor(game) {
      this.gameWidth = game.gameWidth;
  
      this.width = 150;
      this.height = 20;
  
    //   this.maxSpeed = 7;
    //   this.speed = 0;
  
      this.position = {
        x: game.gameWidth / 2 - this.width / 2,
        y: game.gameHeight - this.height - 10
      };
    }
}  