// Set up Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube geometry and material
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Set initial position for the cube
cube.position.z = -5;

// Set camera position
camera.position.z = 5;

// Set up keyboard input
const keyState = {};
document.addEventListener('keydown', event => {
  keyState[event.code] = true;
});
document.addEventListener('keyup', event => {
  keyState[event.code] = false;
});

// Game loop
function animate() {
  requestAnimationFrame(animate);

  // Move cube based on key input
  if (keyState['KeyW']) cube.position.y += 0.1;
  if (keyState['KeyS']) cube.position.y -= 0.1;
  if (keyState['KeyA']) cube.position.x -= 0.1;
  if (keyState['KeyD']) cube.position.x += 0.1;

  renderer.render(scene, camera);
}

animate();
