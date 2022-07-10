import Phaser from 'phaser'

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('boot')
  }

  preload() {
    this.load.setBaseURL('https://labs.phaser.io')

    this.load.image('logo', 'assets/sprites/phaser3-logo.png')
    this.load.image('red', 'assets/particles/red.png')
  }

  create() {
    this.createEmitter()
  }

  createEmitter() {
    const particles = this.add.particles('red')

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD',
    })

    const logo = this.add.image(400, 100, 'logo')

    emitter.startFollow(logo);
  }
}