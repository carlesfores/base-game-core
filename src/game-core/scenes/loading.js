import { addText } from "@/game-core/utils/index";

export default class LoadingScene extends Phaser.Scene {
  constructor() {
    super('LoadingScene');
  }

  preload() {      
    const MARGIN = 16;
    const x = MARGIN;
    const y = MARGIN;

    addText({
      scene: this, 
      x, 
      y, 
      text: 'Loading Scene', 
      origin: 0
    });
  }

  create() {

  }
}