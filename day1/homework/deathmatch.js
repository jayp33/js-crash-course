function shuffle(array) { // https://stackoverflow.com/questions/18806210/generating-non-repeating-random-numbers-in-js
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }

    return array;
}



Superhero = class {
    constructor(name, gender, winningTechnique) {
        this.name = name;
        this.gender = gender;
        this.winningTechnique = winningTechnique;
    }
}

Superheroes.allHeroes = [];
Superheroes.losingHeroes = [];

Superheroes.allHeroes.push(new Superhero('Superman',       'male',  'does not reveal his Kryptonite to LOSER'));
Superheroes.allHeroes.push(new Superhero('Batman',         'male',  'flies like a man and strikes down LOSER down like a bat'));
Superheroes.allHeroes.push(new Superhero('Spider-Man',     'male',  'disables LOSER using the power of the web'));
Superheroes.allHeroes.push(new Superhero('Thor',           'male',  'easily smashes LOSER with his huge hammer'));
Superheroes.allHeroes.push(new Superhero('Wonder Woman',   'female','makes LOSER wonder how GENDER was beat'));
Superheroes.allHeroes.push(new Superhero('Captain America','male',  'brings democracy to LOSER'));
Superheroes.allHeroes.push(new Superhero('Human Torch',    'male',  'makes toast out of LOSER'));
Superheroes.allHeroes.push(new Superhero('Wolverine',      'male',  'scratches more than the surface of LOSER'));
Superheroes.allHeroes.push(new Superhero('Iron Man',       'male',  'can\'t be bent by LOSER'));
Superheroes.allHeroes.push(new Superhero('Hulk',           'male',  'sits on LOSER until GENDER is squashed'));
Superheroes.allHeroes.push(new Superhero('Hercules',       'male',  'throws LOSER into the Olympus'));
Superheroes.allHeroes.push(new Superhero('Obelix',         'male',  'crushes LOSER with an enormous rock'));

Superheroes.allHeroes = shuffle(Superheroes.allHeroes);


function fight(hero1, hero2) {
    if (Math.random() * 100 < 50) {
        return hero1;
    }
    return hero2;
}

function getLoser(winner, hero1, hero2) {
    if (winner == hero1) {
        return hero2;
    }
    return hero1;
}

function printFightResult(winner, loser) {
    gender = (loser.gender == 'male') ? 'he' : 'she';
    winningTechnique = winner.winningTechnique.replace('GENDER', gender);
    winningTechnique = winningTechnique.replace('LOSER', loser.name);
    console.log(winner.name + ' ' + winningTechnique);
}

function grandmaster() {
    if (Superheroes.allHeroes.length == 1) {
        return '--- The Grandmaster of all Superheroes is ' + Superheroes.allHeroes[0].name + '! ---';
    }
    return 'There is no hero yet. Keep fighting!';
}

function deathmatch() {
    while (Superheroes.allHeroes.length > 1) {
        hero1 = Superheroes.allHeroes.pop();
        hero2 = Superheroes.allHeroes.pop();
        winner = fight(hero1, hero2);
        loser = getLoser(winner, hero1, hero2);
        printFightResult(winner, loser);
        Superheroes.allHeroes.unshift(winner);
        Superheroes.losingHeroes.push(loser);
    }    
}


deathmatch();
console.log(grandmaster());
