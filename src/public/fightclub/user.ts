import Fighter, { ImprovedFighter, IFighter } from './fighter';

export interface IUser extends IFighter {
    setInfo: () => void;
    getStatistics: () => void;
}

export class User extends Fighter implements IUser {


    setInfo(): void {
        const nameInput = document.getElementById('name') as HTMLInputElement;
        const powerInput = document.getElementById('power') as HTMLInputElement;
        const healthInput = document.getElementById('health') as HTMLInputElement;

        this.name = nameInput.value;
        this.power = Number(powerInput.value);
        this.health = Number(healthInput.value);

        this._showInfo(this.name, this.power, this.health);
    }

    private _showInfo(name: string, power: number, health: number) {

        if (name == "" || power == 0 || health == 0) {
            const startBtn = document.getElementById('start') as HTMLButtonElement;
            startBtn.style.display = "none";
            alert('Error: Your fighter must have name/power/health!!!!!!');
        } else {
            const $user = document.getElementById('user-info');
            $user.style.display = "block";
            $user.innerText = `Name: ${name} \n Power: ${power} \n Health: ${health}`;
        }
    }

    getStatistics() {
        const showFight = document.getElementById('show-fight') as HTMLDivElement;
        showFight.innerHTML += `Name: ${this.name} --- Power: ${this.power} --- Health : ${this.health}\n\n`+'<br/><br/>';        
    }
}

export class ImprovedUser extends ImprovedFighter implements IUser {
    constructor() {
        super();
    }

    setInfo(): void {
        const nameInput = document.getElementById('improvedname') as HTMLInputElement;
        const powerInput = document.getElementById('improvedpower') as HTMLInputElement;
        const healthInput = document.getElementById('improvedhealth') as HTMLInputElement;

        this.name = nameInput.value;
        this.power = Number(powerInput.value);
        this.health = Number(healthInput.value);

        this._showInfo(this.name, this.power, this.health);
    }

    private _showInfo(name: string, power: number, health: number) {
        if (name == "" || power == 0 || health == 0) {
            const startBtn = document.getElementById('start') as HTMLButtonElement;
            startBtn.style.display = "none";
            alert('Error: Your Improved fighter must have name/power/health!!!!!!');
        } else {
            const $user = document.getElementById('improved-user-info');
            $user.style.display = "block";
            $user.innerText = `Name: ${name} \n Power: ${power} \n Health: ${health}`;
        }
    }

    getStatistics() {
        const showFight = document.getElementById('show-fight') as HTMLDivElement;
        showFight.innerHTML += `Name: ${this.name} --- Power: ${this.power} --- Health : ${this.health}`+'<br/><br/>';

        //console.log(`Name: ${this.name} Power: ${this.power} Health : ${this.health}`)
    }
}