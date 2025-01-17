import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// let startRun = document.querySelector("input[name=is_running]");
let isRunningCheckbox = document.querySelector("input[name=is_running]");
let animationId;
let selectedColor = document.querySelector("input[name=color]");
let selectedSpeed = document.querySelector("input[name=speed_on_Y_axe]");
let bonusSpeed = 0;

const textureLoader = new THREE.TextureLoader();
const backgroundImage = textureLoader.load("/bg.jpg");
scene.background = backgroundImage;

/**
 * Mettre à jour la couleur du cube.
 */
function updateCube1Color() {
  cube1.material.color.set(selectedColor.value);
}

/**
 * Mettre à jour la vitesse du cube.
 */
function updateCube1Speed() {
  bonusSpeed = selectedSpeed.value;
  console.log(selectedSpeed.value);
}

/**
 * Checkbox change d'état.
 */
function handleCheckboxChange(event) {
  if (event.target.checked) {
    startAnimation(); // Démarrer l'animation
  } else {
    stopAnimation(); // Arrêter l'animation
  }
}

// variables globales
let scene;
let renderer;
let camera;
let cube1;

function main() {
  const container = document.querySelector("#scene-container");

  // 1. Ajouter la scène
  scene = new THREE.Scene();
  scene.background = new THREE.Color("cornsilk");

  // 2. Mettre en place le rendu dans le canvas
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  container.appendChild(renderer.domElement);

  // 3. Ajouter les caméras
  camera = new THREE.PerspectiveCamera(
    75,
    container.offsetWidth / container.offsetHeight,
    0.1,
    100
  );
  camera.position.set(2, 2, 15);
  scene.add(camera);

  const helper = new THREE.CameraHelper(camera);
  scene.add(helper);

  // 4. Ajouter les lumières
  render();

  // 5. Ajouter les objets dans la scène
  createCube1();
  helpers();
  selectedColor.addEventListener("input", updateCube1Color);
  selectedSpeed.addEventListener("input", updateCube1Speed);
  updateCube1Speed();

  isRunningCheckbox.addEventListener("change", handleCheckboxChange);

  // 6. Démarrer la boucle d'animation
  renderer.setAnimationLoop(animate);
}

/**
 * Ajouter la lumière.
 */
function render() {
  const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  scene.add(directionalLight);
}

/**
 * La boucle d'animation.
 */
function animate() {
  renderer.render(scene, camera);
}

/**
 * Démarre l'animation.
 */
function startAnimation() {
  function animate() {
    cube1.rotation.y += 0.05 + bonusSpeed * 0.001; // Gros cerveau là
    renderer.render(scene, camera);
    animationId = requestAnimationFrame(animate);
  }
  animate();
}

/**
 * Arrête l'animation.
 */
function stopAnimation() {
  cancelAnimationFrame(animationId);
}

/**
 * Les outils de visualisation.
 */
function helpers() {
  // Les 3 axes
  const axesHelper = new THREE.AxesHelper(12);
  scene.add(axesHelper);

  // La grille (dimension 20 divisée en 20)
  const gridHelper = new THREE.GridHelper(20, 20);
  scene.add(gridHelper);

  // Contrôle avec la souris
  const orbitControls = new OrbitControls(camera, renderer.domElement);
}

/**
 * Ajouter un cube dans la scène.
 */
function createCube1() {
  const geometry = new THREE.BoxGeometry(2, 2, 2, 10, 10, 10);
  const material = new THREE.MeshPhongMaterial({
    color: selectedColor.value, // Couleur initiale du cube
    wireframe: false,
  });
  cube1 = new THREE.Mesh(geometry, material);
  cube1.position.set(0, 0, 0);
  scene.add(cube1);
}

main();
