export module battle {

	export function attack(initiator, target){
		target.health = target.health - initiator.damage
	};

	export function sd(){

	};
};