import Phaser from "phaser";
import Player from "@/game-core/objects/player";

const SCREEN_MARGIN = 16;

export default class TestScene extends Phaser.Scene {
  constructor() {
    super("GameScene");
  }

  create() {
    this.bgMusic = this.sound.add('game', { loop: true, volume: 0.5 });
    this.bgMusic.play();

    this.add.text(16, 16, 'Loading Scene');

    const width = this.scale.width - SCREEN_MARGIN * 2;
    const height = this.scale.height - SCREEN_MARGIN * 2;
    this.physics.world.setBounds(SCREEN_MARGIN, SCREEN_MARGIN, width, height);

    this.border = this.add.graphics();
    this.border.lineStyle(2, 0x00FF00); 
    this.border.setScrollFactor(0); 
    this.updateGameLimits({ width: this.scale.width, height: this.scale.height });
    this.scale.on('resize', this.updateGameLimits, this);

    this.player = new Player(this, 100, 300, 'player');
    this.player.setCollideWorldBounds(true);
  }

  update() {
    this.player.update(this.input.keyboard.createCursorKeys());
  }

  updateGameLimits(gameSize) {
    const width = gameSize.width - SCREEN_MARGIN * 2;
    const height = gameSize.height - SCREEN_MARGIN * 2;
  
    this.physics.world.setBounds(SCREEN_MARGIN, SCREEN_MARGIN, width, height);
  
    if (this.border) {
      this.border.clear();
      this.border.lineStyle(2, 0x00FF00);
      this.border.strokeRect(SCREEN_MARGIN, SCREEN_MARGIN, width, height);
    }
  }
}