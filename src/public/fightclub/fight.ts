import { User, ImprovedUser, IUser } from "./user";

export interface IFight {
    user: User;
    improveduser: ImprovedUser;
    initializeFight: () => void;
}

export class Fight implements IFight {
    user: User;
    improveduser: ImprovedUser;
    constructor() {
        this.user = new User();
        this.improveduser = new ImprovedUser();
        this.initializeFight();
    }

    initializeFight() {
        const setInfoButton = document.getElementById('challenge') as HTMLButtonElement;
        const startButton = document.getElementById('start') as HTMLButtonElement;
        const resetButton = document.getElementById('reset') as HTMLButtonElement;

        setInfoButton.addEventListener('click', () => {
            const pointInput = document.getElementById('point') as HTMLInputElement;
            this.user.setInfo();
            this.improveduser.setInfo();
            if (this.user.name == "" || this.user.power == 0 || this.user.health == 0 || pointInput.value == "") {
                startButton.style.display = "none";
            } else {
                startButton.style.display = "block";
            }
        });


        startButton.addEventListener('click', () => {

            const pointInput = document.getElementById('point') as HTMLInputElement;
            let arr: Array<string> = pointInput.value.split(' ');
            let points: number[] = new Array(arr.length);
            for (let i = 0; i < arr.length; i++) {
                points.push(Number(arr[i]));
            }
            this.startFight(this.user, this.improveduser, points);
            resetButton.style.display = "block";
        });

        resetButton.addEventListener('click', () => {
            this.resetFight()
        });
    }

    private startFight(firstPlayer: User, secondPlayer: ImprovedUser, point: Array<number>) {
        const showFight = document.getElementById('show-fight') as HTMLDivElement;

        let hits: Array<number> = point;

        for (let i in hits) {

            firstPlayer.Hit(secondPlayer, hits[i]);
            showFight.innerHTML += 'First player atacks second :   ';
            secondPlayer.getStatistics();

            if (secondPlayer.health < 0) {
                showFight.innerHTML += '<br/>' + '<h3>First Player Wins</h3>\n';
                break;
            }

            secondPlayer.doubleHit(firstPlayer, hits[i]);
            showFight.innerHTML += 'Second player atacks first :   ';
            firstPlayer.getStatistics();

            if (firstPlayer.health < 0) {
                showFight.innerHTML += '<br/>' + '<h3>Second Player Wins</h3>\n';
                break;
            }
        }
        if (firstPlayer.health > 0 && secondPlayer.health > 0) {
            showFight.innerHTML += 'Draw!!\n';
        }

        if (firstPlayer.health <= 0 || secondPlayer.health <= 0) {
            showFight.innerHTML += 'The Game is Over. Dont push the button' + '<br/>';
            const startButton = document.getElementById('start') as HTMLButtonElement;
            startButton.style.display = "none";
        }

    }

    private resetFight() {
        const nameInput = document.getElementById('name') as HTMLInputElement;
        const powerInput = document.getElementById('power') as HTMLInputElement;
        const healthInput = document.getElementById('health') as HTMLInputElement;

        nameInput.value = "";
        powerInput.value = "";
        healthInput.value = "";

        const nameInput1 = document.getElementById('improvedname') as HTMLInputElement;
        const powerInput1 = document.getElementById('improvedpower') as HTMLInputElement;
        const healthInput1 = document.getElementById('improvedhealth') as HTMLInputElement;

        nameInput1.value = "";
        powerInput1.value = "";
        healthInput1.value = "";

        const showFight = document.getElementById('show-fight') as HTMLDivElement;

        showFight.innerHTML = "";

        const pointInput = document.getElementById('point') as HTMLInputElement;

        pointInput.value = "";

        const startButton = document.getElementById('start') as HTMLButtonElement;
        startButton.style.display = "none";

        const resetButton = document.getElementById('reset') as HTMLButtonElement;

        resetButton.style.display = "none";
    }
}