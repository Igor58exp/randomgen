export default class Entity{

    public posX: number;
    public posY: number;
    public height: number;
    public width: number;
    public color: string;

    constructor(x:number, y:number, height:number, width:number, color:string) {
        this.posX = x;
        this.posY = y;
        this.height = height;
        this.width = width
        this.color = color;
    };

};