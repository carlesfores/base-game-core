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

    // Normaliza para evitar velocidad diagonal excesiva
    if (dir.length() > 0) {
      dir.normalize();
    }

    // Turbo
    const currentSpeed = this.cursors.turbo.isDown ? this.turboSpeed : this.speed;

    // Aplica velocidad solo si hay dirección
    this.setVelocity(dir.x * currentSpeed, dir.y * currentSpeed);

    // Disparo
    if (Phaser.Input.Keyboard.JustDown(this.cursors.shoot)) {
      this.shootBullet(dir);
    }
  }

  shootBullet(direction) {
    // Si no hay dirección, no dispara
    if (direction.length() === 0) {
      return
    };

    const bullet = this.scene.physics.add.sprite(this.x, this.y, 'bullet');
    bullet.setVelocity(direction.x * 400, direction.y * 400);
    bullet.setRotation(direction.angle());
  }
}