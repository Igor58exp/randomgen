import Square from "./src/entity.js";
import * as DATA from "./src/data.json";

console.log(DATA);
let a = 1664525;
let c = 1013904223;
let m = Math.pow(2,31);
let seed = 12234;

function nextRand() {
    seed = (a * seed + c) % m;
    return seed;
}
function nextRandFloat() {
    return nextRand() / m;
}

let canvas = document.getElementById("canvas");
let context = canvas.getContext('2d');
let y = 0;
let square1 = new Square();
console.log(square1);
draw();

function draw() {
    for ( let x = 0; x <550; x++ ){
        if (nextRandFloat() < 0.5){
            context.fillRect(x, y, 1, 1);
        };
    };
    y++;
    if ( y < 600 ){
        requestAnimationFrame(draw);
        console.log()
    };
};