let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyF, keyR, keyLEFT, keyRIGHT;

// reserve mouse control setup
let pointer;

// Benjamin Quang, Air Patrol (Rocket Patrol Mods), 4/20/2022, 1.5 days
// 
/*
Allow the player to control the Rocket after it's fired (5)
Implement mouse control for player movement and mouse click to fire (20)
Display the time remaining (in seconds) on the screen (10)
Implement the speed increase that happens after 30 seconds in the original game (5)
Add your own (copyright-free) background music to the Play scene (5)
Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
Point total (100) [105 if not limited to 100]
*/
/* Used: 
https://www.piskelapp.com/
https://rexrainbow.github.io/phaser3-rex-notes/docs/site/timer/
https://mixkit.co/free-sound-effects/explosion/
https://www.bensound.com/royalty-free-music/track/new-dawn
*/