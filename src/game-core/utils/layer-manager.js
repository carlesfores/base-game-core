export default class LayerManager {
  constructor(scene) {
    this.scene = scene;
    this.layers = {
      background: scene.add.layer().setDepth(0),
      gameplay: scene.add.layer().setDepth(10),
      ui: scene.add.layer().setDepth(100),
      top: scene.add.layer().setDepth(1000)
    };
  }

  addToLayer(name, gameObject) {
    if (this.layers[name]) {
      this.layers[name].add(gameObject);
    }
  }

  getLayer(name) {
    return this.layers[name];
  }
}