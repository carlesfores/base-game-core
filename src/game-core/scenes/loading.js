export default class LoadingScene extends Phaser.Scene {
  constructor() {
    super('LoadingScene');
  }

  preload() {      
    this.add.text(16, 16, 'Loading Scene');
    this.load.audio('menu', 'assets/sounds/menu.wav');
    this.load.audio('game', 'assets/sounds/game.wav');
    this.load.image('bullet', 'assets/sprites/bullet.png');
    this.load.image('player', 'assets/sprites/player.png');
  }

  create() {
    this.scene.start('MenuScene');
  }
}