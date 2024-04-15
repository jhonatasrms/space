const canvas = document.getElementById('space');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stars = [];

// Função para gerar estrelas aleatórias
function generateStars() {
  for (let i = 0; i < 100; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 2;
    const speed = (Math.random() * 0.5) + 0.1; // Velocidade das estrelas
    stars.push({ x, y, size, speed });
  }
}

// Função para desenhar estrelas
function drawStars() {
  ctx.fillStyle = '#fff';
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fill();
  });
}

// Função principal de animação
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawStars();
  
  // Movimento das estrelas
  stars.forEach(star => {
    star.x -= star.speed;
    if (star.x < 0) {
      star.x = canvas.width;
    }
  });
  
  requestAnimationFrame(animate);
}

// Inicialização
generateStars();
animate();
