export default class Entity{

    public posX: number = 1;
    public posY: number = 1;
    private color: string;

    constructor(x:number, y:number) {
        this.posX = x;
        this.posY = y;
        this.color = this.generateColor();
    };

    generateColor(){
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        };
        return color;
    };
};