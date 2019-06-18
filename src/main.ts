import Player from './player';
import Entity from './entity';

console.log('asdasdasd')
let name = prompt()
let player = new Player(100, 3, name);
let enemy = new Entity(2,4);

console.log(enemy);
console.log(player);