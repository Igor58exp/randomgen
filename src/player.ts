export default class Player {
    playerY = 0;
    playerX = 0;
    playerName = '';
    setPlayerName(name:string){
        this.playerName = name;
    };
    constructor(x:number, y:number){
        this.playerY = y;
        this.playerX = x;
    };
};