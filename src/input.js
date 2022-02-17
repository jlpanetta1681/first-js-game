export default class InputHandler {
    constructor() {
      document.addEventListener("keydown", (event) => {
        switch (event.keyCode) {
          default:
            alert("use the arrows to move the paddle");
            break;
  
          case 37:
            alert("move left");
            break;
  
          case 39:
            alert("move right");
            break;
        }
      });
    }
  }
  