import Player from './player';
import Entity from './entity';
import * as PIXI from 'pixi.js'
import Stats from './stats.js'

const MAX_PARTICLES = 20000;
const c_heigt = window.innerHeight;
const c_width = window.innerWidth;
const app = new PIXI.Application({height:c_heigt - 10, width: c_width - 10 });
document.body.appendChild(app.view);

let stats = Stats();
document.body.appendChild(stats.domElement);
stats.domElement.style.position = "absolute";
stats.domElement.style.top = "0px";

const sprites = new PIXI.ParticleContainer( MAX_PARTICLES, {
    position: true,
    rotation: true,
    uvs: true
});
app.stage.addChild(sprites);

let enemiesArray:any = [];
const totalSprites = app.renderer instanceof PIXI.Renderer ? MAX_PARTICLES : 100;
for (let i = 0; i < totalSprites; i++){
    const dude = PIXI.Sprite.from('/src/img/maggot_tiny.png');
    dude.x = Math.random() * app.screen.width;
    dude.y = Math.random() * app.screen.height - 100;
    enemiesArray.push(dude);
    sprites.addChild(dude);
};

const graphics = new PIXI.Graphics();

// draw a rectangle
graphics.lineStyle(2, 0x0000FF, 1);
graphics.drawRect(50, 250, 100, 100);
app.stage.addChild(graphics);


// let's create a moving shape
const thing = new PIXI.Graphics();
app.stage.addChild(thing);
thing.x = 800 / 2;
thing.y = 600 / 2;

let count = 0;


app.ticker.add(() => {

    stats.begin();
    for (let i = 0; i < enemiesArray.length; i++) {
        const dude = enemiesArray[i];
        if (dude.y <= app.screen.height){
            dude.y++;
        } else {
            dude.y = 0 - 50;
        };
    };
    count += 0.1;

    thing.clear();
    thing.lineStyle(10, 0xff0000, 1);
    thing.beginFill(0xffFF00, 0.5);

    thing.moveTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
    thing.lineTo(120 + Math.cos(count) * 20, -100 + Math.sin(count) * 20);
    thing.lineTo(120 + Math.sin(count) * 20, 100 + Math.cos(count) * 20);
    thing.lineTo(-120 + Math.cos(count) * 20, 100 + Math.sin(count) * 20);
    thing.lineTo(-120 + Math.sin(count) * 20, -100 + Math.cos(count) * 20);
    thing.closePath();

    thing.rotation = count * 0.1;

    stats.end();

});

/*


 let canvas:any = document.getElementById("canvas");
 let ctx = canvas.getContext("2d");

 let keyState = {};
 window.addEventListener('keydown',function(e){
 keyState[e.keyCode || e.which] = true;
 },true);
 window.addEventListener('keyup',function(e){
 keyState[e.keyCode || e.which] = false;
 },true);


 const MAX_ENTITIES: number = 100;
 const ENTITY_HEIGHT: number = 5;
 const ENTITY_WIDTH: number = 5;
 const PLAYER_WIDTH: number = 50;
 const PLAYER_HEIGHT: number = 50;

 canvas.width = window.innerWidth - 20;
 canvas.height = window.innerHeight - 20;

 let player:Player = new Player(canvas.width / 2, canvas.height - PLAYER_HEIGHT, "Player", PLAYER_WIDTH, PLAYER_HEIGHT);
 let enemyArray:Entity[] = [];

 for (let x = 0; x < MAX_ENTITIES; x++){
 enemyArray.push(new Entity(Math.random() * canvas.width, Math.random() * canvas.height, ENTITY_HEIGHT, ENTITY_WIDTH, generateColor()));
 };

 function generateColor(){
 var letters = '0123456789ABCDEF';
 var color = '#';
 for (var i = 0; i < 6; i++) {
 color += letters[Math.floor(Math.random() * 16)];
 };
 return color;
 };

 function checkPlayerCollision(player:Player, enemy:Entity){
 if (player.posX >= enemy.posX){
 return true;
 } else {
 return false;
 };
 };

 function animate (){
 let t0 = Date.now();
 ctx.font =  'normal bold 20px courier';
 ctx.clearRect(0, 0, canvas.width, canvas.height);


 //check for pressed buttons and move player
 if (keyState[37] || keyState[65]){
 player.posX -= 3;
 };
 if (keyState[39] || keyState[68]){
 player.posX += 3;
 };
 if (keyState[38] || keyState[87]){
 player.posY -= 3;
 };
 if (keyState[83] || keyState[40]){
 player.posY += 3;
 };

 //loop through all entities
 for (let x = 0; x < enemyArray.length; x++){
 //RESET ENTITY TO TOP IF AT BOTTOM
 if (enemyArray[x].posY >= canvas.height){
 enemyArray[x].posY = 0 - enemyArray[x].height ;
 enemyArray[x].posX = Math.random() * canvas.width;
 };

 //chek collisoin vs player

 if (checkPlayerCollision(player, enemyArray[x])){
 enemyArray[x].posY++
 } else {
 enemyArray[x].posY++;
 };

 enemyArray[x].posY++
 //DRAW ENETITy
 ctx.fillStyle = enemyArray[x].color;
 ctx.fillRect(enemyArray[x].posX, enemyArray[x].posY, enemyArray[x].width, enemyArray[x].height);
 };

 //DRAW LAYER
 ctx.fillStyle = player.color;
 ctx.fillRect(player.posX, player.posY, PLAYER_WIDTH, PLAYER_HEIGHT);

 let t1 = Date.now() - t0;
 requestAnimationFrame(animate);
 };

 animate();*/
