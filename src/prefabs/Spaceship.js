// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene
        this.points = pointValue;   // store pointValue
        this.moveSpeed = game.settings.spaceshipSpeed;         // pixels per frame
    }

    update() {
        // move spaceship left
        this.x -= this.moveSpeed;
        // wrap around from left edge to right edge
        if(this.x <= 0 - this.width) {
            this.reset();
        }

        // this.speedUp = false;

        if(((game.settings.gameTimer = 60000 && this.clock.getRemaining() <= 30000) || (game.settings.gameTimer = 45000 && this.clock.getRemaining() <= 15000)) && !this.speedUp ){
            this.moveSpeed *= 2;
            this.speedUp = true;
        }
    }

    // position reset
    reset() {
        this.x = game.config.width;
    }
}