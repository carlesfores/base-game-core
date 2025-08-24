import Phaser from "phaser";
import { addText } from "@/game-core/utils/index";

export default class TestScene extends Phaser.Scene {
  constructor() {
    super("MenuScene");
  }

  create() {
    const MARGIN = 16;
    const x = MARGIN;
    const y = MARGIN;

    addText({
      scene: this, 
      x, 
      y, 
      text: 'Menu Scene', 
      origin: 0
    });

    this.start = addText({
      scene: this, 
      x: this.scale.width / 2, 
      y: this.scale.height / 2, 
      text: 'Start', 
      origin: 0.5, 
      style: { fontSize: "20px" },
    });

    this.start.setInteractive();
    this.start.alpha = 0.5;

    this.start.on('pointerover', () => {
      this.start.alpha = 1;
    });

    this.start.on('pointerout', () => {
      this.start.alpha = 0.5;
    });

    this.start.on('pointerdown', () => {
      // TODO Load game scene
    });
  }
}