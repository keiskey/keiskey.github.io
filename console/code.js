class Game {
  get start() {
    if (!this.page) return;
    document.body.style.background = "black"
    return "ok"
  }
  constructor() {
    this.page = 0;
  }
}

const game = new Game;
window.start = game.start;
game.page = 1;
