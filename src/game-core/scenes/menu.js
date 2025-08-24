import Phaser from "phaser";

export default class TestScene extends Phaser.Scene {
  constructor() {
    super("MenuScene");
  }

  create() {
    this.bgMusic = this.sound.add('menu', { loop: true, volume: 0.5 });
    this.bgMusic.play();
    
    this.add.text(16, 16, 'v0.0.0');

    // menu - start btn
    this.startBtn = this.add.text(
      this.scale.width / 2, 
      this.scale.height / 2, 
      'Start',
      { fontSize: "20px" }
    );

    this.startBtn.alpha = 0.5;
    this.startBtn.setOrigin(0.5);
    this.startBtn.setInteractive();

    this.startBtn.on('pointerover', () => {
      this.startBtn.alpha = 1;
    });

    this.startBtn.on('pointerout', () => {
      this.startBtn.alpha = 0.5;
    });

    this.startBtn.on('pointerdown', () => {
      this.bgMusic.stop();
      this.cameras.main.fadeOut(200);
      // wait 0.2s before start game scene (for harmony)
      const startSceneCallback = () => {
        this.scene.start('GameScene')
      };

      this.time.delayedCall(200, startSceneCallback, [], this); 
    });
  }
}