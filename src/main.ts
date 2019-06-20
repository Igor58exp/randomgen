import Player from './player';
import Entity from './entity';

var canvas:any = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

let player = new Player(100, 3, "Player");
let enemyArray:any = [];


for (let x = 0; x < 100; x++){
    enemyArray.push(new Entity(Math.floor(Math.random() * canvasWidth), 0))
};

function animate (){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    for (let x = 0; x < enemyArray.length; x++){
        ctx.fillStyle = enemyArray[x].color;
        ctx.fillRect(enemyArray[x].posX, enemyArray[x].posY++, 20, 20);
    };
};

animate();