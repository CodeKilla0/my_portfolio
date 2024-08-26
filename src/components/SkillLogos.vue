<template>
  <div class="particle-container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";

export default {
  name: "ParticleAnimation",
  mounted() {
    this.initParticles();
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    initParticles() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");
      const particles = [];
      const numParticles = 100;
      let canvasWidth = (canvas.width = window.innerWidth);
      let canvasHeight = (canvas.height = window.innerHeight);

      // Créez les particules avec des propriétés aléatoires
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvasWidth,
          y: Math.random() * canvasHeight,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
        });
      }

      // Fonction pour dessiner les particules sur le canvas
      function drawParticles() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.fillStyle = "white";
        particles.forEach((p) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // Animez les particules avec anime.js
      anime({
        targets: particles,
        x: function (p) {
          p.x += p.vx;
          if (p.x > canvasWidth) p.x = 0;
          if (p.x < 0) p.x = canvasWidth;
          return p.x;
        },
        y: function (p) {
          p.y += p.vy;
          if (p.y > canvasHeight) p.y = 0;
          if (p.y < 0) p.y = canvasHeight;
          return p.y;
        },
        easing: "linear",
        duration: Infinity,
        update: drawParticles,
      });
    },
    handleResize() {
      const canvas = this.$refs.canvas;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      this.initParticles(); // Re-initialiser les particules après redimensionnement
    },
  },
};
</script>

<style scoped>
.particle-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: black;
  overflow: hidden;
}
</style>
