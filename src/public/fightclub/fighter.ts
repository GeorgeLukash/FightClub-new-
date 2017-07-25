export interface IFighter {
    name: string;
    power: number;
    health: number;
    setDamage: (damage: number) => void;
}


export default class Fighter implements IFighter {

    name: string;
    power: number;
    health: number;

    constructor() {
        this.name = 'Player1';
        this.power = 10;
        this.health = 200;
    }

    setDamage(damage = 10) {
        this.health = this.health - damage;
    }

    Hit(enemy: Fighter, points: number) {
        enemy.setDamage(points * this.power);
    }

}

export class ImprovedFighter extends Fighter {

    doubleHit(enemy, point) {
        super.Hit(enemy, 2 * point);
    }

}