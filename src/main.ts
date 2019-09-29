import  { entites } from './entites';
import * as PIXI from 'pixi.js'
import Stats from './stats.js'

let a = new entites.Player(1, 1, "asd", 12, 12)
console.log(a)


const MAX_BLOOD_PARTICLES = 20;
const MAX_PARTICLE = 10000;
const enemy_width = 20;
const enemy_height = 20;
const c_heigt = window.innerHeight;
const c_width = window.innerWidth;
const app:any = new PIXI.Application({height:c_heigt - 10, width: c_width - 10 });
document.body.appendChild(app.view);

let stats = Stats();
document.body.appendChild(stats.domElement);
stats.domElement.style.position = "absolute";
stats.domElement.style.top = "0px";


const sprites:any = new PIXI.ParticleContainer( MAX_PARTICLE, {
    position: true,
    rotation: true,
    uvs: true
});

app.stage.addChild(sprites);



let entit = new entites.Player(100,  100, "player", 50, 50)
let goreArray:any = [];

for (let i = 0; i < MAX_BLOOD_PARTICLES; i++){
    const blood_particle:any = PIXI.Sprite.from('./src/img/blood.png');
    blood_particle.anchor.set(0.5);
    blood_particle.x = Math.random() * app.screen.width;
    blood_particle.y = Math.random() * app.screen.height;
    blood_particle.height = enemy_height;
    blood_particle.width = enemy_width;
    goreArray.push(blood_particle);
    sprites.addChild(blood_particle);
};


app.ticker.add(() => {
    stats.begin();

    for (let i = 0; i < goreArray.length; i++) {
        const gib = goreArray[i];
        if (gib.y <= app.screen.height){
            gib.y++;
        } else {
            gib.y = 0 - 50;
        };
    };
    stats.end();
});



function generateColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    };
    return color;
};


/*


 let keyState = {};
 window.addEventListener('keydown',function(e){
 keyState[e.keyCode || e.which] = true;
 },true);
 window.addEventListener('keyup',function(e){
 keyState[e.keyCode || e.which] = false;
 },true);




 let player:Player = new Player(canvas.width / 2, canvas.height - PLAYER_HEIGHT, "Player", PLAYER_WIDTH, PLAYER_HEIGHT);
 let enemyArray:Entity[] = [];

 for (let x = 0; x < MAX_ENTITIES; x++){
 enemyArray.push(new Entity(Math.random() * canvas.width, Math.random() * canvas.height, ENTITY_HEIGHT, ENTITY_WIDTH, generateColor()));
 };



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

*/
