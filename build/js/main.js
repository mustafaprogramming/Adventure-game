#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
function help() {
    console.log(chalk.blueBright.bold(`\n\t\t+———————————————————————————————————————————————————————+\n\t\t|                    ${chalk.rgb(255, 160, 0).bold(`Experience Needed`)}                  |\n\t\t|                                                       |\n\t\t|                  ${chalk.red.bold(` Goblin      =${chalk.green(` 0   EXP`)}`)}               |\n\t\t|                  ${chalk.red.bold(` Barbarian   =${chalk.green(` 50  EXP`)}`)}               |\n\t\t|                   ${chalk.red.bold(`Dragonborn  =${chalk.green(` 100 EXP`)}`)}               |\n\t\t|                   ${chalk.red.bold(`necromancer =${chalk.green(` 150 EXP`)}`)}               |\n\t\t|                   ${chalk.red.bold(`warlock     =${chalk.green(` 200 EXP`)}`)}               |\n\t\t+———————————————————————————————————————————————————————+`));
}
let condition = chalk.greenBright.bold("Yes");
do {
    console.log(chalk.redBright(`\n\n\t   _-^+-^+       ------     === o o 0 o o ===     ------       +^-+^-_`));
    console.log(chalk.redBright(`\t<==!~~ +*:-+- o({> ${chalk.blueBright.bold(`Welcome To Mustafa's - Adventure Game`)} <})o -+-:*+ ~~!==>`));
    console.log(chalk.redBright(`\t   ‾-∨+-∨+       ------     === o o 0 o o ===     ------       +∨-+∨-‾\n\n\n`));
    console.log(chalk.blueBright.bold(`\t\t\t\tUse Name : ${chalk.greenBright('-hint')} | for hint \n`));
    class Hero {
        name;
        health;
        defence;
        attack;
        experience;
        constructor(heroname, herotype) {
            this.name = heroname;
            this.experience = 0;
            if (herotype === 'barbarian') {
                this.health = 150;
                this.attack = ['Slamming', 'Punch', 'Spear'];
                this.defence = ['Shield', 'Dodge', 'Nothing'];
            }
            else if (herotype === 'dragonborn') {
                this.health = 200;
                this.attack = ['Fireball', 'Dragon Breath', 'Slamming'];
                this.defence = ['Wall Of Fire', 'Dodge', 'Nothing'];
            }
            else if (herotype === 'warlock') {
                this.health = 80;
                this.attack = ['Fireball', 'Health Decrease'];
                this.defence = ['Magic Shield', 'Wall Of Fire', 'Dodge', 'Nothing'];
            }
            else if (herotype === 'necromancer') {
                this.health = 60;
                this.defence = ['Wall Of Dead', 'Dodge'];
                this.attack = ['Amry Of Dead', 'Corspe Explosion', 'Bone Storm', 'Nothing'];
            }
            else {
                this.health = 0;
                this.attack = [];
                this.defence = [];
            }
        }
        increasehealth() {
            if (this.name === 'barbarian') {
                this.health = 200;
            }
            else if (this.name === 'dragonborn') {
                this.health = 250;
            }
            else if (this.name === 'warlock') {
                this.health = 100;
            }
            else if (this.name === 'necromancer') {
                this.health = 60;
            }
            else {
                this.health = 0;
            }
        }
        decreasehealth(amount) {
            this.health -= amount;
            console.log(chalk.redBright.bold(`\n\t\t+————————————————————+\n\t\t|   -${amount} Health       |\n\t\t+————————————————————+\n`));
            console.log(chalk.blue.bold(`\n\t\t${this.name}'s Health: ${chalk.green.bold(this.health)}\n\n`));
        }
        increaseExperience(amount) {
            this.experience += amount;
        }
        combat(defence, attack) {
            if (defence === 'Shield') {
                if (attack === 'Sword' || attack === 'Crossbow' || attack === 'Punch' || attack === 'Spear') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Defended ${attack} Attack using a Shield\n`));
                }
                else if (attack === 'Slamming') {
                    console.log(chalk.blue.bold(`\n${attack} Attack wasn't Fully Defended by ${chalk.green.bold(this.name)} using a Shield\n`));
                    this.decreasehealth(20);
                }
                else if (attack === 'Fireball' || attack === 'Corspe Explosion' || attack === 'Dragon Breath' || attack === 'Bone Storm') {
                    console.log(chalk.blue.bold(`\n${attack} Attack wasn't Fully Defended by ${chalk.green.bold(this.name)} using a Shield\n`));
                    this.decreasehealth(15);
                }
                else if (attack === 'Health Decrease') {
                    console.log(chalk.blue.bold(`\nAttacks like ${attack} cannot be Defended by using a Normal Sheild\n`));
                    this.decreasehealth(30);
                }
                else if (attack === 'Amry Of Dead') {
                    console.log(chalk.blue.bold(`\n${attack} wasn't Defended correctly by using a Normal Sheild\n`));
                    this.decreasehealth(45);
                }
            }
            else if (defence === 'Magic Shield') {
                if (attack === 'Sword' || attack === 'Crossbow' || attack === 'Punch' || attack === 'Spear') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Defended ${attack} Attack using a ${chalk.rgb(180, 2, 245).bold('Magical')} Shield\n`));
                }
                else if (attack === 'Slamming') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Defended ${attack} Attack using a ${chalk.rgb(180, 2, 245).bold('Magical')} Shield\n`));
                }
                else if (attack === 'Fireball' || attack === 'Corspe Explosion' || attack === 'Dragon Breath' || attack === 'Bone Storm') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Defended ${attack} Attack using a ${chalk.rgb(180, 2, 245).bold('Magical')} Shield\n`));
                }
                else if (attack === 'Health Decrease') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Defended ${attack} Attack using a ${chalk.rgb(180, 2, 245).bold('Magical')} Shield\n`));
                }
                else if (attack === 'Amry Of Dead') {
                    console.log(chalk.blue.bold(`\n${attack} was Too Powerfull for the ${chalk.rgb(180, 2, 245).bold('Magical')} Shield\n`));
                    this.decreasehealth(10);
                }
            }
            else if (defence === 'Wall Of Fire') {
                if (attack === 'Sword' || attack === 'Punch') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Defended ${attack} Attack using a Wall Of Fire\n`));
                }
                else if (attack === 'Crossbow' || attack === 'Spear') {
                    console.log(chalk.blue.bold(`\n\t\tAttacks like ${attack} cannot be Defended by using a Wall Of Fire\n`));
                    this.decreasehealth(15);
                }
                else if (attack === 'Slamming') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Defended ${attack} Attack using a Wall Of Fire\n`));
                }
                else if (attack === 'Fireball' || attack === 'Corspe Explosion' || attack === 'Dragon Breath' || attack === 'Bone Storm') {
                    console.log(chalk.blue.bold(`\n\t\tAttacks like ${attack} cannot be Defended by using a Wall Of Fire\n`));
                    this.decreasehealth(30);
                }
                else if (attack === 'Health Decrease') {
                    console.log(chalk.blue.bold(`\nAttacks like ${attack} cannot be Defended by using a Wall Of Fire\n`));
                    this.decreasehealth(30);
                }
                else if (attack === 'Amry Of Dead') {
                    console.log(chalk.blue.bold(`\n${attack} was Too Powerfull for the Wall Of Fire\n`));
                    this.decreasehealth(20);
                }
            }
            else if (defence === 'Wall Of Dead') {
                if (attack === 'Sword' || attack === 'Crossbow' || attack === 'Punch' || attack === 'Spear') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Defended ${attack} Attack using the Wall of Dead\n`));
                }
                else if (attack === 'Slamming') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Defended ${attack} Attack using a Wall of Dead\n`));
                }
                else if (attack === 'Fireball' || attack === 'Corspe Explosion' || attack === 'Dragon Breath' || attack === 'Bone Storm') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Defended ${attack} Attack using a Wall of Dead\n`));
                }
                else if (attack === 'Health Decrease') {
                    console.log(chalk.blue.bold(`\nAttacks like ${attack} cannot be Defended by using a Wall Of Dead\n`));
                    this.decreasehealth(30);
                }
                else if (attack === 'Amry Of Dead') {
                    console.log(chalk.blue.bold(`\n${attack} was Defended by the Wall of Dead\n`));
                }
            }
            else if (defence === 'Dodge') {
                if (attack === 'Sword' || attack === 'Crossbow' || attack === 'Punch' || attack === 'Spear') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Escaped ${attack} Attack using the Dodge\n`));
                }
                else if (attack === 'Slamming') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Escaped ${attack} Attack using Dodge\n`));
                }
                else if (attack === 'Corspe Explosion' || attack === 'Bone Storm') {
                    console.log(chalk.blue.bold(`\nAttacks like ${attack} cannot be Escaped by using Dodge\n`));
                    this.decreasehealth(20);
                }
                else if (attack === 'Fireball' || attack === 'Dragon Breath') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Escaped ${attack} Attack using the Dodge\n`));
                }
                else if (attack === 'Health Decrease') {
                    console.log(chalk.blue.bold(`\nAttacks like ${attack} cannot be Escaped by using Dodge\n`));
                    this.decreasehealth(30);
                }
                else if (attack === 'Amry Of Dead') {
                    console.log(chalk.blue.bold(`\nAttacks like ${attack} cannot be Escaped by using Dodge\n`));
                    this.decreasehealth(50);
                }
                else {
                    if (attack === 'Sword' || attack === 'Crossbow' || attack === 'Punch' || attack === 'Spear') {
                        console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} was hit by ${attack} Attack\n`));
                        this.decreasehealth(10);
                    }
                    else if (attack === 'Slamming') {
                        console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} was hit by ${attack} Attack\n`));
                        this.decreasehealth(20);
                    }
                    else if (attack === 'Fireball' || attack === 'Corspe Explosion' || attack === 'Dragon Breath' || attack === 'Bone Storm') {
                        console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} was hit by ${attack} Attack\n`));
                        this.decreasehealth(40);
                    }
                    else if (attack === 'Health Decrease') {
                        console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} was hit by ${attack} Attack\n`));
                        this.decreasehealth(30);
                    }
                    else if (attack === 'Amry Of Dead') {
                        console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} was hit by ${attack} Attack\n`));
                        this.decreasehealth(50);
                    }
                }
            }
            else {
                if (attack === 'Sword' || attack === 'Crossbow' || attack === 'Punch' || attack === 'Spear') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} was hit by ${attack} Attack\n`));
                    this.decreasehealth(10);
                }
                else if (attack === 'Slamming') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} was hit by ${attack} Attack\n`));
                    this.decreasehealth(20);
                }
                else if (attack === 'Fireball' || attack === 'Corspe Explosion' || attack === 'Dragon Breath' || attack === 'Bone Storm') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} was hit by ${attack} Attack\n`));
                    this.decreasehealth(40);
                }
                else if (attack === 'Health Decrease') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} was hit by ${attack} Attack\n`));
                    this.decreasehealth(30);
                }
                else if (attack === 'Amry Of Dead') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} was hit by ${attack} Attack\n`));
                    this.decreasehealth(50);
                }
            }
        }
    }
    ;
    class Enemy {
        name;
        health;
        attack;
        defence;
        constructor(enemyName, enemyType) {
            if (enemyName.length > 0) {
                this.name = enemyName;
            }
            else {
                this.name = enemyType;
            }
            if (enemyType === 'Barbarian') {
                this.health = 150;
                this.attack = ['Slamming', 'Punch', 'Spear'];
                this.defence = ['Shield', 'Dodge', 'Nothing'];
            }
            else if (enemyType === 'Goblin') {
                this.health = 60;
                this.attack = ['Sword', 'Crossbow'];
                this.defence = ['Shield', 'Dodge', 'Nothing'];
            }
            else if (enemyType === 'Dragonborn') {
                this.health = 200;
                this.attack = ['Fireball', 'Dragon Breath', 'Slamming'];
                this.defence = ['Wall Of Fire', 'Dodge', 'Nothing'];
            }
            else if (enemyType === 'Warlock') {
                this.health = 80;
                this.attack = ['Fireball', 'Health Decrease'];
                this.defence = ['Magic Shield', 'Wall Of Fire', 'Dodge', 'Nothing'];
            }
            else if (enemyType === 'Necromancer') {
                this.health = 60;
                this.defence = ['Wall Of Dead', 'Dodge'];
                this.attack = ['Amry Of Dead', 'Corspe Explosion', 'Bone Storm', 'Nothing'];
            }
            else {
                this.health = 0;
                this.attack = [];
                this.defence = [];
            }
        }
        decreasehealth(amount) {
            this.health -= amount;
            console.log(chalk.redBright.bold(`\n\t\t+————————————————————+\n\t\t|   -${amount} Health       |\n\t\t+————————————————————+\n`));
            console.log(chalk.blue.bold(`\n\t\t${this.name}'s Health: ${chalk.green.bold(this.health)}\n\n`));
        }
        combat(defence, attack) {
            if (defence === 'Shield') {
                if (attack === 'Sword' || attack === 'Crossbow' || attack === 'Punch' || attack === 'Spear') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Defended ${attack} Attack using a Shield\n`));
                }
                else if (attack === 'Slamming') {
                    console.log(chalk.blue.bold(`\n${attack} Attack wasn't Fully Defended by ${chalk.green.bold(this.name)} using a Shield\n`));
                    this.decreasehealth(20);
                }
                else if (attack === 'Fireball' || attack === 'Corspe Explosion' || attack === 'Dragon Breath' || attack === 'Bone Storm') {
                    console.log(chalk.blue.bold(`\n${attack} Attack wasn't Fully Defended by ${chalk.green.bold(this.name)} using a Shield\n`));
                    this.decreasehealth(15);
                }
                else if (attack === 'Health Decrease') {
                    console.log(chalk.blue.bold(`\nAttacks like ${attack} cannot be Defended by using a Normal Sheild\n`));
                    this.decreasehealth(30);
                }
                else if (attack === 'Amry Of Dead') {
                    console.log(chalk.blue.bold(`\n${attack} wasn't Defended correctly by using a Normal Sheild\n`));
                    this.decreasehealth(45);
                }
            }
            else if (defence === 'Magic Shield') {
                if (attack === 'Sword' || attack === 'Crossbow' || attack === 'Punch' || attack === 'Spear') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Defended ${attack} Attack using a ${chalk.rgb(180, 2, 245).bold('Magical')} Shield\n`));
                }
                else if (attack === 'Slamming') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Defended ${attack} Attack using a ${chalk.rgb(180, 2, 245).bold('Magical')} Shield\n`));
                }
                else if (attack === 'Fireball' || attack === 'Corspe Explosion' || attack === 'Dragon Breath' || attack === 'Bone Storm') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Defended ${attack} Attack using a ${chalk.rgb(180, 2, 245).bold('Magical')} Shield\n`));
                }
                else if (attack === 'Health Decrease') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Defended ${attack} Attack using a ${chalk.rgb(180, 2, 245).bold('Magical')} Shield\n`));
                }
                else if (attack === 'Amry Of Dead') {
                    console.log(chalk.blue.bold(`\n${attack} was Too Powerfull for the ${chalk.rgb(180, 2, 245).bold('Magical')} Shield\n`));
                    this.decreasehealth(10);
                }
            }
            else if (defence === 'Wall Of Fire') {
                if (attack === 'Sword' || attack === 'Punch') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Defended ${attack} Attack using a Wall Of Fire\n`));
                }
                else if (attack === 'Crossbow' || attack === 'Spear') {
                    console.log(chalk.blue.bold(`\n\t\tAttacks like ${attack} cannot be Defended by using a Wall Of Fire\n`));
                    this.decreasehealth(15);
                }
                else if (attack === 'Slamming') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Defended ${attack} Attack using a Wall Of Fire\n`));
                }
                else if (attack === 'Fireball' || attack === 'Corspe Explosion' || attack === 'Dragon Breath' || attack === 'Bone Storm') {
                    console.log(chalk.blue.bold(`\n\t\tAttacks like ${attack} cannot be Defended by using a Wall Of Fire\n`));
                    this.decreasehealth(30);
                }
                else if (attack === 'Health Decrease') {
                    console.log(chalk.blue.bold(`\nAttacks like ${attack} cannot be Defended by using a Wall Of Fire\n`));
                    this.decreasehealth(30);
                }
                else if (attack === 'Amry Of Dead') {
                    console.log(chalk.blue.bold(`\n${attack} was Too Powerfull for the Wall Of Fire\n`));
                    this.decreasehealth(20);
                }
            }
            else if (defence === 'Wall Of Dead') {
                if (attack === 'Sword' || attack === 'Crossbow' || attack === 'Punch' || attack === 'Spear') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Defended ${attack} Attack using the Wall of Dead\n`));
                }
                else if (attack === 'Slamming') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Defended ${attack} Attack using a Wall of Dead\n`));
                }
                else if (attack === 'Fireball' || attack === 'Corspe Explosion' || attack === 'Dragon Breath' || attack === 'Bone Storm') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Defended ${attack} Attack using a Wall of Dead\n`));
                }
                else if (attack === 'Health Decrease') {
                    console.log(chalk.blue.bold(`\nAttacks like ${attack} cannot be Defended by using a Wall Of Dead\n`));
                    this.decreasehealth(30);
                }
                else if (attack === 'Amry Of Dead') {
                    console.log(chalk.blue.bold(`\n${attack} was Defended by the Wall of Dead\n`));
                }
            }
            else if (defence === 'Dodge') {
                if (attack === 'Sword' || attack === 'Crossbow' || attack === 'Punch' || attack === 'Spear') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Escaped ${attack} Attack using the Dodge\n`));
                }
                else if (attack === 'Slamming') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Escaped ${attack} Attack using Dodge\n`));
                }
                else if (attack === 'Corspe Explosion' || attack === 'Bone Storm') {
                    console.log(chalk.blue.bold(`\nAttacks like ${attack} cannot be Escaped by using Dodge\n`));
                    this.decreasehealth(20);
                }
                else if (attack === 'Fireball' || attack === 'Dragon Breath') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} Successfully Escaped ${attack} Attack using the Dodge\n`));
                }
                else if (attack === 'Health Decrease') {
                    console.log(chalk.blue.bold(`\nAttacks like ${attack} cannot be Escaped by using Dodge\n`));
                    this.decreasehealth(30);
                }
                else if (attack === 'Amry Of Dead') {
                    console.log(chalk.blue.bold(`\nAttacks like ${attack} cannot be Escaped by using Dodge\n`));
                    this.decreasehealth(50);
                }
                else {
                    if (attack === 'Sword' || attack === 'Crossbow' || attack === 'Punch' || attack === 'Spear') {
                        console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} was hit by ${attack} Attack\n`));
                        this.decreasehealth(10);
                    }
                    else if (attack === 'Slamming') {
                        console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} was hit by ${attack} Attack\n`));
                        this.decreasehealth(20);
                    }
                    else if (attack === 'Fireball' || attack === 'Corspe Explosion' || attack === 'Dragon Breath' || attack === 'Bone Storm') {
                        console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} was hit by ${attack} Attack\n`));
                        this.decreasehealth(40);
                    }
                    else if (attack === 'Health Decrease') {
                        console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} was hit by ${attack} Attack\n`));
                        this.decreasehealth(30);
                    }
                    else if (attack === 'Amry Of Dead') {
                        console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} was hit by ${attack} Attack\n`));
                        this.decreasehealth(50);
                    }
                }
            }
            else {
                if (attack === 'Sword' || attack === 'Crossbow' || attack === 'Punch' || attack === 'Spear') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} was hit by ${attack} Attack\n`));
                    this.decreasehealth(10);
                }
                else if (attack === 'Slamming') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} was hit by ${attack} Attack\n`));
                    this.decreasehealth(20);
                }
                else if (attack === 'Fireball' || attack === 'Corspe Explosion' || attack === 'Dragon Breath' || attack === 'Bone Storm') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} was hit by ${attack} Attack\n`));
                    this.decreasehealth(40);
                }
                else if (attack === 'Health Decrease') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} was hit by ${attack} Attack\n`));
                    this.decreasehealth(30);
                }
                else if (attack === 'Amry Of Dead') {
                    console.log(chalk.blue.bold(`\n${chalk.green.bold(this.name)} was hit by ${attack} Attack\n`));
                    this.decreasehealth(50);
                }
            }
        }
    }
    let repeat = true;
    do {
        let playing = chalk.greenBright.bold("Yes");
        let stop = true;
        let heroName;
        do {
            heroName = await inquirer.prompt([
                {
                    type: 'input',
                    name: 'heroName',
                    message: chalk.rgb(2, 55, 245).bold('Enter Players Name:')
                }
            ]);
            if (heroName.heroName === '--hint' || heroName.heroName === '-hint') {
                help();
            }
            else {
                stop = false;
            }
        } while (stop === true);
        let heroType = await inquirer.prompt([
            {
                type: 'list',
                name: 'heroType',
                message: chalk.rgb(2, 55, 245).bold('Select The Type Of Your Character:'),
                choices: ["barbarian", 'dragonborn', 'warlock', 'necromancer']
            }
        ]);
        if (heroName.heroName.length <= 0) {
            console.log(chalk.redBright.bold(`\n\t\t\t\t\t+———————————————————————————+\n\t\t\t\t\t|   INVALID NAME FOR HERO   |\n\t\t\t\t\t+———————————————————————————+\n`));
        }
        else {
            let player = new Hero(heroName.heroName, heroType.heroType);
            do {
                let stop = true;
                let enemyName;
                do {
                    enemyName = await inquirer.prompt([
                        {
                            type: 'input',
                            name: 'enemyName',
                            message: chalk.rgb(2, 55, 245).bold('Enter Opponent Name:')
                        }
                    ]);
                    if (enemyName.enemyName === '--hint' || enemyName.enemyName === '-hint') {
                        help();
                    }
                    else {
                        stop = false;
                    }
                } while (stop === true);
                let enemyType = await inquirer.prompt([
                    {
                        type: 'list',
                        name: 'enemyType',
                        message: chalk.rgb(2, 55, 245).bold('Select The Type Of Your Opponent:'),
                        choices: ['Goblin', "Barbarian", 'Dragonborn', 'Warlock', 'Necromancer']
                    }
                ]);
                let enemy = new Enemy(enemyName.enemyName, enemyType.enemyType);
                if (enemyType.enemyType === 'Barbarian' && player.experience < 50 || enemyType.enemyType === 'Dragonborn' && player.experience < 100 || enemyType.enemyType === 'Warlock' && player.experience < 200 || enemyType.enemyType === 'Necromancer' && player.experience < 150) {
                    console.log(chalk.redBright.bold(`\n\t\t\t\tNOT ENOUGHT EXPERIENCE\n`));
                    console.log(chalk.yellow.bold(`\nSelect Another Enemy Type || You can use the -hint command to See which enemy you can fight With Your Experience\n`));
                    console.log(chalk.blueBright.bold(`\n\t\t\t\t    Experience: ${chalk.green(player.experience)}\n\n`));
                }
                else {
                    repeat = false;
                    console.log(chalk.redBright.bold(`\n\n\t\t\t\t\t${chalk.rgb(242, 117, 0).bold(player.name)}   VS   ${chalk.rgb(242, 117, 0).bold(enemy.name)}\n`));
                    console.log(chalk.redBright.bold(`\n\t\t${chalk.rgb(242, 117, 0).bold(player.name.trim() + `'s`)} Health:${chalk.rgb(242, 117, 0).bold(player.health)}\t\t\t\t${chalk.rgb(242, 117, 0).bold(enemy.name.trim() + `'s`)} Health:${chalk.rgb(242, 117, 0).bold(enemy.health)}\n\n`));
                    function checkHealth() {
                        if (player.health == 0 || player.health <= 0) {
                            console.log(chalk.blueBright.bold('\n\t\t+———————————————+\n\t\t|   You LOST!   |\n\t\t+———————————————+\n\n'));
                            console.log(chalk.greenBright.bold('\n\n\t\t+25 Experience \n\n'));
                            player.increaseExperience(25);
                            console.log(chalk.blueBright(`\n\n\t      Player Experience: ${chalk.greenBright.bold(player.experience)}\n\n`));
                            fighting = false;
                            player.increasehealth();
                            return false;
                        }
                        else if (enemy.health == 0 || enemy.health <= 0) {
                            console.log(chalk.blueBright.bold('\n\t\t+——————————————+\n\t\t|   You WON!   |\n\t\t+——————————————+\n\n'));
                            console.log(chalk.greenBright.bold('\n\t\t+50 Experience \n'));
                            player.increaseExperience(50);
                            console.log(chalk.blueBright(`\n\n\t      Player Experience: ${chalk.greenBright.bold(player.experience)}\n\n`));
                            player.increasehealth();
                            fighting = false;
                            return false;
                        }
                        else {
                            return true;
                        }
                    }
                    async function battle(attack) {
                        let defence = enemy.defence[Math.floor(Math.random() * enemy.defence.length)];
                        console.log(chalk.rgb(242, 117, 0).bold(`\n\t${chalk.blue.bold(enemy.name)} is defending With ${chalk.blue.bold(defence)}\n`));
                        enemy.combat(defence, attack);
                        if (checkHealth()) {
                            let enemyAttack = enemy.attack[Math.floor(Math.random() * enemy.attack.length)];
                            let playerChoice = await inquirer.prompt([
                                {
                                    type: 'list',
                                    name: 'Defence',
                                    message: chalk.rgb(242, 117, 0).bold(`${chalk.redBright.bold(enemy.name)} is Attcking with ${chalk.redBright.bold(enemyAttack)} Choose a Defence:`),
                                    choices: player.defence,
                                }
                            ]);
                            console.log(chalk.rgb(242, 117, 0).bold(`\n\t${chalk.blue.bold(player.name)} is defending ${chalk.redBright.bold(enemy.name + `'s`)} ${chalk.redBright.bold(enemyAttack)} With ${chalk.blue.bold(playerChoice.Defence)}\n`));
                            player.combat(playerChoice.Defence, enemyAttack);
                        }
                    }
                    let fighting = true;
                    do {
                        if (checkHealth()) {
                            let fight = await inquirer.prompt([
                                {
                                    type: 'list',
                                    name: 'attack',
                                    message: chalk.rgb(2, 55, 245).bold(`Choose an attack to Hit the ${chalk.rgb(242, 117, 0).bold(enemy.name)}:`),
                                    choices: player.attack,
                                }
                            ]);
                            await battle(fight.attack);
                        }
                    } while (fighting);
                    let keepplaying = await inquirer.prompt([
                        {
                            type: 'list',
                            name: 'answer',
                            message: chalk.rgb(2, 55, 245).bold('Do You Want To Fight Again With the same Character?'),
                            choices: [chalk.greenBright.bold("Yes"), chalk.red.bold("No")]
                        }
                    ]);
                    playing = keepplaying.answer;
                }
            } while (playing === chalk.greenBright.bold("Yes"));
        }
        ;
    } while (repeat == true);
    console.log(chalk.redBright(`\n\n\t   _-^+-^+         ------       === o o 0 o o ===       ------         +^-+^-_`));
    console.log(chalk.redBright(`\t<==!~~ +*:-+- o({> ${chalk.blueBright.bold(`Thanks for PLaying Mustafa's - Adventure Game`)} <})o -+-:*+ ~~!==>`));
    console.log(chalk.redBright(`\t   ‾-∨+-∨+         ------       === o o 0 o o ===       ------         +∨-+∨-‾\n\n\n\n`));
    let continuation = await inquirer.prompt([
        {
            type: 'list',
            name: 'answer',
            message: chalk.rgb(2, 55, 245).bold('Do You Want To Play Again:'),
            choices: [chalk.greenBright.bold("Yes"), chalk.red.bold("No")]
        }
    ]);
    condition = continuation.answer;
} while (condition === chalk.greenBright.bold("Yes"));
