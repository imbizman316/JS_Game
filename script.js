let playerState = 'idle';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function(e){
    playerState = e.target.value;
})

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'js_game_img/shadow_dog.png';
const spirteWidth = 575;
const spriteHeight = 523;


let gameFrame = 0;
const staggerFrame = 5;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 6,
    },
    {
        name: 'jump',
        frames: 6,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 7,
    },
    {
        name: 'dizzy',
        frames: 10,
    },
    {
        name: 'sit',
        frames: 4,
    },
    {
        name: 'roll',
        frames: 6,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 4,
    },

];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spirteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
})





function animate() {
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
    
    let position = Math.floor(gameFrame / staggerFrame) % spriteAnimations[playerState].loc.length;
    //frameX = spirteWidth * position;
    let frameX = spirteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;

    ctx.drawImage(playerImage, frameX, frameY, 
        spirteWidth, spriteHeight, 
        0,0,spirteWidth,spriteHeight
    );
    
    
    gameFrame ++;
    
    requestAnimationFrame(animate);
};

animate();



