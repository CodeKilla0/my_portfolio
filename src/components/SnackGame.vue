<!-- src/components/SnakeGame.vue -->
<template>
  <div class="game-container">
    <canvas ref="canvas"></canvas>
    <div class="controls">
      <button @click="startGame">Start</button>
      <button @click="pauseGame">Pause</button>
    </div>
    <div class="score">Score: {{ score }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canvas: null,
      ctx: null,
      snake: [{ x: 10, y: 10 }],
      direction: "RIGHT",
      food: { x: 5, y: 5 },
      gameInterval: null,
      gamePaused: false,
      gridSize: 20,
      canvasWidth: 1000, // Largeur fixe
      canvasHeight: 600, // Hauteur fixe
      score: 0,
      eatSound: new Audio('../../public/eating-chips-81092.mp3'),
    };
  },
  methods: {
    startGame() {
      if (this.gameInterval) return; // Ne démarre pas un nouveau jeu si déjà en cours
      this.snake = [{ x: 10, y: 10 }];
      this.direction = "RIGHT";
      this.food = this.randomFoodPosition();
      this.score = 0; // Réinitialise le score
      this.gamePaused = false;
      this.gameInterval = setInterval(this.updateGame, 100);
      window.addEventListener("keydown", this.handleKeyPress);
    },
    pauseGame() {
      this.gamePaused = !this.gamePaused;
      if (this.gamePaused) {
        clearInterval(this.gameInterval);
        this.gameInterval = null;
      } else {
        this.gameInterval = setInterval(this.updateGame, 100);
      }
    },
    updateGame() {
      if (this.gamePaused) return;

      this.moveSnake();
      this.checkCollision();
      this.checkFoodCollision();
      this.drawGame();
    },
    moveSnake() {
      let head = { ...this.snake[0] };

      switch (this.direction) {
        case "LEFT":
          head.x -= 1;
          break;
        case "RIGHT":
          head.x += 1;
          break;
        case "UP":
          head.y -= 1;
          break;
        case "DOWN":
          head.y += 1;
          break;
      }

      this.snake.unshift(head);
      this.snake.pop();
    },
    checkCollision() {
      let head = this.snake[0];

      if (
        head.x < 0 ||
        head.x >= this.canvasWidth / this.gridSize ||
        head.y < 0 ||
        head.y >= this.canvasHeight / this.gridSize ||
        this.snake
          .slice(1)
          .some((segment) => segment.x === head.x && segment.y === head.y)
      ) {
        this.gameOver();
      }
    },
    checkFoodCollision() {
      let head = this.snake[0];

      if (head.x === this.food.x && head.y === this.food.y) {
        this.snake.push({ ...this.snake[this.snake.length - 1] });
        this.food = this.randomFoodPosition();
        this.score += 10; // Augmente le score
        this.eatSound.play();
      }
    },
    randomFoodPosition() {
      let x = Math.floor(Math.random() * (this.canvasWidth / this.gridSize));
      let y = Math.floor(Math.random() * (this.canvasHeight / this.gridSize));
      return { x, y };
    },
    handleKeyPress(event) {
      switch (event.key) {
        case "ArrowLeft":
          if (this.direction !== "RIGHT") this.direction = "LEFT";
          break;
        case "ArrowRight":
          if (this.direction !== "LEFT") this.direction = "RIGHT";
          break;
        case "ArrowUp":
          if (this.direction !== "DOWN") this.direction = "UP";
          break;
        case "ArrowDown":
          if (this.direction !== "UP") this.direction = "DOWN";
          break;
      }
    },
    drawGame() {
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

      this.ctx.fillStyle = "green";
      this.snake.forEach((segment) => {
        this.ctx.fillRect(
          segment.x * this.gridSize,
          segment.y * this.gridSize,
          this.gridSize,
          this.gridSize
        );
      });

      this.ctx.fillStyle = "red";
      this.ctx.fillRect(
        this.food.x * this.gridSize,
        this.food.y * this.gridSize,
        this.gridSize,
        this.gridSize
      );

      // Dessiner le score sur le canvas
      this.ctx.fillStyle = "white";
      this.ctx.font = "20px Arial";
      this.ctx.fillText("Score: " + this.score, 10, 20);
    },
    gameOver() {
      clearInterval(this.gameInterval);
      this.gameInterval = null;
      alert("Game Over! Final Score: " + this.score);
      window.removeEventListener("keydown", this.handleKeyPress);
    },
    resizeCanvas() {
      // Pas besoin de redimensionner le canvas ici
    },
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = this.canvasWidth;
    this.canvas.height = this.canvasHeight;
    this.resizeCanvas(); // Appel initial inutile ici, mais il est ok de l'avoir
    window.addEventListener("resize", this.resizeCanvas);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeCanvas);
    window.removeEventListener("keydown", this.handleKeyPress);
  },
};
</script>

<style scoped>
.game-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000;
}

canvas {
  border: 1px solid #fff;
}

.controls {
  position: absolute;
  bottom: 60px;
}

button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #ddd;
}

.score {
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  font-size: 24px;
}
</style>
