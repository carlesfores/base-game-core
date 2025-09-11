import Phaser from "phaser";
import Player from "@/game-core/objects/player";

export default class MainGameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  create() {
    const {width, height} = this.scale;
    const worldWidth = 1280;
    const worldHeight = 480;

    this.mainGameMap = this.make.tilemap({ key: "OneBitMap" });
    const tileset = this.mainGameMap.addTilesetImage("1-bit-tileset", "OneBitTiles");
    
    this.backgroundLayer = this.mainGameMap.createLayer("background", tileset, 0, 0);
    this.groundLayer = this.mainGameMap.createLayer("ground", tileset, 0, 0);
    this.groundLayer.setCollisionByProperty({ collides: true });

    this.player = new Player(this, width / 2, height / 2, 'OneBitTiles');

    this.physics.add.collider(this.player, this.groundLayer);

    this.cameras.main.startFollow(this.player);
    this.physics.world.setBounds(0, 0, worldWidth, worldHeight);
    this.cameras.main.setBounds(0, 0, worldWidth, worldHeight);

    this.bubble = this.add.text(0, 0, "", {
      fontSize: "14px",
      backgroundColor: "#fff",
      color: "#000",
      padding: { x: 5, y: 2 },
    }).setOrigin(0.5).setVisible(false);
  }

  update() {
    this.player.update();

    const tile = this.mainGameMap.getTileAtWorldXY(
      this.player.x,
      this.player.y,
      true,
      this.cameras.main,
      this.backgroundLayer
    );

    console.log(tile.properties.event);

  }
}