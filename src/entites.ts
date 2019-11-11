export module entites {

	function generateName () {
		return 'asdfasdf';
	};

	export class Player {

		public health: number;
		public posY: number;
		public posX: number;
		public height: number;
		public width: number;
		public name: string;
		public damage: number;
		public color: string = "#42f4e2";
		public currentWeapon:any = {};

		constructor(x: number, y: number, name: string, width, height) {
			this.health = 100;
			this.posX = x;
			this.posY = y;
			this.name = name;
			this.width = width;
			this.height = height;
			this.damage = 30;
		};
	};

	export class Enemy extends Player {

		constructor(){
			super(2, 2, generateName(), 2, 2);
		};
	};
};