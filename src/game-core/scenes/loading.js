export default class LoadingScene extends Phaser.Scene {
  constructor() {
    super('LoadingScene');
  }

  preload() {      
    this.createLoadingItems();
    this.loadAudios();
    this.loadImages();
  }

  loadAudios() {
    this.load.audio('menu', 'assets/sounds/menu.wav');
    this.load.audio('game', 'assets/sounds/game.wav');
  }

  loadImages() {
    this.load.image('player', 'assets/sprites/player.png');
  }

  createLoadingItems() {
    const { width, height } = this.scale;
    const barWidth = width * 0.6; 
    const barHeight = 8;         
    const x = (width - barWidth) / 2;
    const y = (height - barHeight) - 30 ;
  
    this.loadBar = this.add.graphics();
    this.loadBar.fillStyle(0x444444, 1); 
    this.loadBar.fillRect(x, y, barWidth, barHeight);
  
    this.progressBar = this.add.graphics();
  
    this.load.on("progress", (value) => {
      this.progressBar.clear();
      this.progressBar.fillStyle(0xffffff, 1); 
      this.progressBar.fillRect(x, y, barWidth * value, barHeight);
    });
  
    this.load.on("complete", () => {
      this.scene.start("MenuScene");
    });
  }

}