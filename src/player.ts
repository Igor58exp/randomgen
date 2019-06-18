export default class Player {

    private playerY: number;
    private playerX: number;
    private playerName: string;

    constructor(x:number, y:number, name){
        this.playerY = y;
        this.playerX = x;
        this.playerName = name;
        console.log(this.playerName);
    };

};