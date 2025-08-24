export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    scene.add.existing(this);
    scene.physics.add.existing(this);
    
    this.speed = 300;
    this.turboSpeed = 600;
    this.cursors = scene.input.keyboard.addKeys({
      up: 'W',
      down: 'S',
      left: 'A',
      right: 'D',
      shoot: 'SPACE',
      turbo: 'SHIFT'
    });
  }

  update() {
    const dir = new Phaser.Math.Vector2(0, 0);
    let currentSpeed = this.speed;

    if (this.cursors.left.isDown) { 
      this.angle = -90;
      dir.x = -1 
    } else if (this.cursors.right.isDown) {
      dir.x = 1;
      this.angle = 90;
    }

    if (this.cursors.up.isDown) { 
      this.angle = 0;
      dir.y = -1;
     } else if (this.cursors.down.isDown) { 
      this.angle = 180;
      dir.y = 1 
    };

    if (this.cursors.shoot.isDown) {
      this.shootBullet(dir);
    }

    if (this.cursors.turbo.isDown) {
      currentSpeed = this.turboSpeed;
    }

    // avoid excessive diagonal velocity
    if (dir.length() > 0) {
      dir.normalize();
    }

    this.setVelocity(dir.x * currentSpeed, dir.y * currentSpeed);

  }

  shootBullet(direction) {
    if (direction.length() === 0) {
      return
    };

    const bullet = this.scene.physics.add.sprite(this.x, this.y, 'bullet');
    bullet.setVelocity(direction.x * 400, direction.y * 400);
    bullet.setRotation(direction.angle());
  }
}