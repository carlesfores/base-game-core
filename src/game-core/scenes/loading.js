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

    // TODO Create pre load scene

    // Init game assets
  }

  create() {
   // TODO Use Phaser timers if exist

    setTimeout(() => {
      this.scene.start('MenuScene');
    }, 600);
  }
}