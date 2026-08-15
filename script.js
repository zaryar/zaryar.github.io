const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

let width = window.innerWidth;
let height = window.innerHeight;
let forces = [];
let particles = [];
const nParticles = 250;
let p = 0;

if (typeof noise !== 'undefined') {
  noise.seed(Math.random());
}

let lastMoveTime = Date.now();

class V2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  add(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }
  reset(x, y) {
    this.x = x;
    this.y = y;
  }
  lerp(vector, n) {
    this.x += (vector.x - this.x) * n;
    this.y += (vector.y - this.y) * n;
  }
}

class Particle {
  constructor() {
    this.position = new V2(-100, -100);
    this.velocity = new V2();
    this.acceleration = new V2();
    this.alpha = 0;
    this.color = '#000000';
    this.points = [
      new V2(-10 + Math.random() * 20, -10 + Math.random() * 20),
      new V2(-10 + Math.random() * 20, -10 + Math.random() * 20),
      new V2(-10 + Math.random() * 20, -10 + Math.random() * 20)
    ];
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.reset(0, 0);
    this.alpha -= 0.008;
    if (this.alpha < 0) this.alpha = 0;
  }

  follow() {
    const x = Math.floor(this.position.x / 20);
    const y = Math.floor(this.position.y / 20);
    const rows = Math.floor(height / 20);
    const cols = Math.floor(width / 20);

    if (x >= 0 && x < cols && y >= 0 && y < rows) {
      const index = x * rows + y;
      const force = forces[index];
      if (force) this.applyForce(force);
    }
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  draw() {
    if (this.alpha <= 0) return;
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.moveTo(this.position.x + this.points[0].x, this.position.y + this.points[0].y);
    ctx.lineTo(this.position.x + this.points[1].x, this.position.y + this.points[1].y);
    ctx.lineTo(this.position.x + this.points[2].x, this.position.y + this.points[2].y);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

const resize = () => {
  const dpr = window.devicePixelRatio || 1;
  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width = width * dpr;
  canvas.height = height * dpr;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  ctx.scale(dpr, dpr);
  initForces();
};

const initForces = () => {
  let i = 0;
  for (let x = 0; x < width; x += 20) {
    for (let y = 0; y < height; y += 20) {
      if (!forces[i]) forces[i] = new V2();
      i++;
    }
  }
  if (i < forces.length) {
    forces.splice(i);
  }
};

const updateForces = (t) => {
  if (typeof noise === 'undefined') return;
  let i = 0;
  let xOff = 0;
  for (let x = 0; x < width; x += 20) {
    xOff += 0.1;
    let yOff = 0;
    for (let y = 0; y < height; y += 20) {
      yOff += 0.1;
      const a = noise.perlin3(xOff, yOff, t * 0.00005) * Math.PI * 4;
      if (forces[i]) {
        forces[i].reset(Math.cos(a) * 0.1, Math.sin(a) * 0.1);
      }
      i++;
    }
  }
};

const initParticles = () => {
  particles = [];
  for (let i = 0; i < nParticles; i++) {
    particles.push(new Particle());
  }
};

const drawParticles = () => {
  for (let i = 0; i < nParticles; i++) {
    particles[i].update();
    particles[i].follow();
    particles[i].draw();
  }
};

const launchParticle = () => {
  const timeSinceLastMove = Date.now() - lastMoveTime;
  if (timeSinceLastMove < 250) {
    particles[p].position.reset(emitter.x, emitter.y);
    particles[p].velocity.reset(-1 + Math.random() * 2, -1 + Math.random() * 2);
    particles[p].color = `hsl(${Math.floor((emitter.x / (width || 1)) * 256)}, 65%, ${60 + Math.random() * 20}%)`;
    particles[p].alpha = 0.75;
    p = (p + 1) % nParticles;
  }
};

const updateEmitter = () => {
  emitter.lerp(mouse, 0.2);
};

const animate = (t) => {
  ctx.clearRect(0, 0, width, height);
  updateEmitter();
  launchParticle();
  launchParticle();
  updateForces(t);
  drawParticles();
  requestAnimationFrame(animate);
};

const mouse = new V2(window.innerWidth / 2, window.innerHeight / 2);
const emitter = new V2(window.innerWidth / 2, window.innerHeight / 2);

const pointerMove = (e) => {
  const pageX = e.touches ? e.touches[0].pageX : e.pageX;
  const pageY = e.touches ? e.touches[0].pageY : e.pageY;
  mouse.x = pageX;
  mouse.y = pageY;
  lastMoveTime = Date.now();
};

resize();
initParticles();
requestAnimationFrame(animate);

window.addEventListener('resize', resize, { passive: true });
window.addEventListener('pointermove', pointerMove, { passive: true });
window.addEventListener('touchmove', pointerMove, { passive: true });
