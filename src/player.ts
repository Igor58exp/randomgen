export default class Player {

    private health: number;
    private playerY: number;
    private playerX: number;
    private playerName: string;
    private damage: number;

    constructor(x:number, y:number, name:string){
        this.playerX = x;
        this.playerY = y;
        this.playerName = name;
    };

};