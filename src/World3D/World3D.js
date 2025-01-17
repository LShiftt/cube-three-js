import { createScene } from "./components/scene.js";

class World3D {    
  constructor( container, myPlanet) {
    this.container = container;
    this.myPlanet = myPlanet;
    this.scene = createScene();
  }
  /**
   * Initialiser les éléments dans la scène.
   */
  init() {
    console.log(this);
  }
  /**
   * Démarrer la boucle d'animation
   */
  start() {
    // this.renderer.setAnimationLoop(this.animate.bind(this));
  }
  /**
   * La boucle d'animation.
   */
  animate() {}
}
export { World3D };
