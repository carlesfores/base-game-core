import Phaser from "phaser";
import { MENU_ITEMS, MENU_ITEMS_GAP } from "@/game-core/scenes/data/menu";

export default class MenuScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MenuScene' });
  }

  create() {
      this.createMenuItems();
    this.input.keyboard.on("keydown-SPACE", () => this.startGameScene(), this);
  }

  createMenuItems() {
    const {width, height} = this.scale;

    for (const [index, item] of MENU_ITEMS.entries()) {
      this[item.key] = this.add.text(width * 0.5, (height * 0.7) + index * MENU_ITEMS_GAP, item.label);
      this[item.key].setOrigin(0.5).setInteractive();
      this[item.key].alpha = 0.7;

      this[item.key].on('pointerover', () => this[item.key].alpha = 1);
      this[item.key].on('pointerout', () => this[item.key].alpha = 0.5);

      if (item.action && typeof this[item.action] === 'function') {
        this[item.key].on('pointerdown', () => this[item.action](item.key));
      }
    }
  }

  delayStartScene(callback) {
    this.time.delayedCall(200, () => callback, null, this);
  }

  startGameScene() {
    try {
      this.cameras.main.fadeOut(200);
      this.delayStartScene(this.scene.start("GameScene"));
    } catch(erro) {
      console.warn(error);
    }
  }

  startOptionsScene() {
    this.cameras.main.fadeOut(200);
    this.delayStartScene(this.scene.start("MainGameScene"));
  }
}