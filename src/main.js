import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { World3D } from "./World3D/World3D.js";
import { initSplineTexture } from "three/examples/jsm/Addons.js";

function main() {
  // cibler le conteneur du canvas
  const container = document.querySelector("#scene-container");
  // 1. Instancier la classe World
  const world = new World3D(container, "Mars");
  // 2. Déclencher l'actualisation de la scène
  world.init();
  world.start();
}
main();

// // variables globales
// let scene;
// let renderer;
// let camera;
// let cube1;
// let cube2;
// let cube3;
// let sphere1;
// let time = 0;

// function main() {
//   const container = document.querySelector("#scene-container");
//   // 1. Ajouter la scène
//   scene = new THREE.Scene();
//   // scene.background = new THREE.Color("cornsilk");
//   const textureLoader = new THREE.TextureLoader();
//   const backgroundImage = textureLoader.load("./bg.jpg");
//   scene.background = backgroundImage;

//   // 2. Mettre en place le rendu dans le canvas
//   renderer = new THREE.WebGLRenderer();
//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setSize(container.offsetWidth, container.offsetHeight);
//   container.appendChild(renderer.domElement);
//   // 3. Ajouter les caméras
//   camera = new THREE.PerspectiveCamera(
//     75,
//     container.offsetWidth / container.offsetHeight,
//     0.1,
//     100
//   );
//   camera.position.set(2, 2, 15);
//   scene.add(camera);
//   const helper = new THREE.CameraHelper(camera);
//   scene.add(helper);
//   // 4. Ajouter les lumières
//   render();

//   // 5. Ajouter les objets dans la scène
//   createCube1();
//   createCube2();
//   createCube3();
//   //   createSphere1();
//   helpers();

//   // 6. Démarrer la boucle d'animation
//   renderer.setAnimationLoop(animate);
// }
// /**
//  * La lumière
//  */
// function render() {
//   const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
//   scene.add(ambientLight);
//   const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
//   scene.add(directionalLight);
// }

// /**
//  * La boucle d'animation.
//  */
// function animate(time) {
//   const timePasted = time * 0.001;
//   cube1.rotation.y += 0.05;
//   cube2.rotation.y += -0.03;
//   cube1.position.y = 75 * Math.abs(Math.sin(timePasted));
//   cube2.position.y = 50 * Math.abs(Math.sin(timePasted));
//   cube3.position.y = 25 * Math.abs(Math.sin(timePasted));

//   renderer.render(scene, camera);
// }

// /**
//  * Les outils de visualisation.
//  */
// function helpers() {
//   // les 3 axes
//   const axesHelper = new THREE.AxesHelper(12);
//   scene.add(axesHelper);
//   // la grille (dimension 20 divisée en 20)
//   const gridHelper = new THREE.GridHelper(20, 20);
//   scene.add(gridHelper);
//   // contrôle avec la souris
//   const orbitControls = new OrbitControls(camera, renderer.domElement);
// }
// /**
//  * Ajouter un cube dans la scène.
//  */
// function createCube1() {
//   const geometry = new THREE.BoxGeometry(6, 6, 6, 10, 10, 10);
//   const material = new THREE.MeshPhongMaterial({
//     color: "orange",
//     wireframe: false,
//   });
//   cube1 = new THREE.Mesh(geometry, material);
//   cube1.position.set(-10, 5, 0);
//   scene.add(cube1);
// }
// /**
//  * Ajouter un cube dans la scène.
//  */
// function createCube2() {
//   const geometry = new THREE.BoxGeometry(6, 6, 6, 10, 10, 10);
//   const material = new THREE.MeshBasicMaterial({
//     color: "orange",
//     wireframe: false,
//   });
//   cube2 = new THREE.Mesh(geometry, material);
//   cube2.position.set(0, 5, 0);
//   scene.add(cube2);
// }
// /**
//  * Ajouter un cube dans la scène.
//  */
// function createCube3() {
//   const geometry = new THREE.BoxGeometry(6, 6, 6, 10, 10, 10);
//   const material = new THREE.MeshLambertMaterial({
//     color: "orange",
//     wireframe: false,
//   });
//   cube3 = new THREE.Mesh(geometry, material);
//   cube3.position.set(10, 5, 0);
//   scene.add(cube3);
// }
// /**
//  * Ajouter un cube dans la scène.
//  */
// function createSphere1() {
//   const geometry = new THREE.SphereGeometry(5, 50, 50);
//   const material = new THREE.MeshBasicMaterial({
//     color: "blue",
//     wireframe: true,
//   });
//   sphere1 = new THREE.Mesh(geometry, material);
//   sphere1.position.set(0, 0, 0);
//   scene.add(sphere1);
// }
