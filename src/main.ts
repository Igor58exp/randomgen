import  { entites } from './entites';
import  { battle } from './battle';
import  { Utils } from './utils';
import * as PIXI from 'pixi.js'
import * as Stats from 'stats.js'

let player = new entites.Player(1, 1, "Player_1", 12, 12);
let enemy = new entites.Enemy();
console.log(enemy)

const MAX_BLOOD_PARTICLES = 20;
const MAX_PARTICLE = 10000;
const enemy_width = 20;
const enemy_height = 20;
const c_heigt = window.innerHeight;
const c_width = window.innerWidth;
const app:any = new PIXI.Application({height: c_heigt - 10, width: c_width - 10});
document.body.appendChild(app.view);

let stats = Stats();
document.body.appendChild(stats.domElement);
stats.domElement.style.position = "absolute";
stats.domElement.style.top = "0px";

let keyState = {};
window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);
window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);

battle.attack(player, enemy);

console.log(enemy);
app.ticker.add(() => {

    //check for pressed buttons and move player
    if (keyState[37] || keyState[65]){
        //player.posX -= 3;
        console.log(1)
    };
    if (keyState[39] || keyState[68]){
        //player.posX += 3;
    };
    if (keyState[38] || keyState[87]){
        //player.posY -= 3;
    };
    if (keyState[83] || keyState[40]){
       // player.posY += 3;
    };

    stats.end();
});


