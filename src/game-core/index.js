import Phaser from "phaser";
import LoadingScene from "./scenes/loading";

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth, 
  height: window.innerHeight,
  parent: 'game-content', 
  backgroundColor: '#000000',
  scene: [LoadingScene],
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 }
    }
  }
};

const InitGame = (parent) => {
  return new Phaser.Game({...config, parent});
};

export default InitGame;