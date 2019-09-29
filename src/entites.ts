export module entites {

	export class Player {

		public health: number;
		public posY: number;
		public posX: number;
		public height: number;
		public width: number;
		public playerName: string;
		public damage: number;
		public color: string = "#42f4e2";
		public currentWeapon:any = {};

		constructor(x: number, y: number, name: string, width, height) {
			this.health = 100;
			this.posX = x;
			this.posY = y;
			this.playerName = name;
			this.width = width;
			this.height = height;
		};
	};

	export class Enemy extends Player {

	};
};