export default class LoadingScene extends Phaser.Scene {
  constructor() {
    super('LoadingScene');
  }

  preload() {      
    this.createLoadingItems();
    this.setLoadingEvents();
    this.loadAudios();
    this.loadImages();
  }

  setLoadingEvents() {
    this.load.on("progress", (value) => {
      this.progressBar.clear();
      this.progressBar.fillStyle(0XFFFFFF, 1);
      this.progressBar.fillRect(
        this.cameras.main.width / 4,
        this.cameras.main.height / 2 - 16,
        (this.cameras.main.width / 2) * value,
        16
      );
    });

    this.load.on("complete", () => {
      this.scene.start('MenuScene');
    });
  }

  loadAudios() {
    this.load.audio('menu', 'assets/sounds/menu.wav');
    this.load.audio('game', 'assets/sounds/game.wav');
  }

  loadImages() {
    this.load.image('bullet', 'assets/sprites/bullet.png');
    this.load.image('player', 'assets/sprites/player.png');
  }

  createLoadingItems() {
    this.loadBar = this.add.graphics();
    this.loadBar.fillStyle(0x00FF00, 1);
    this.loadBar.fillRect(
      this.cameras.main.width / 4 - 2,
      this.cameras.main.height / 2 - 18,
      this.cameras.main.width / 2 + 4,
      20
    );
    this.progressBar = this.add.graphics();
  }
}