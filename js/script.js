var myHero = prompt('Enter name: ');
var hp = prompt('Enter your hp: ')

if (!localStorage.getItem('username', myHero)){
    (localStorage.setItem('username', myHero))
} ;

if (!localStorage.getItem('hp', hp)){
    (localStorage.setItem('hp', hp))
};

var hero = {
    hero: myHero,
    power: hp
};
console.log(hero);

var confirmCont = confirm('Continue?');
if (confirmCont == true) {
    var monsterName = prompt('Enter monster name');
    var monsterHp = prompt('Enter monster hp');
} else {var myHero = prompt('Enter name')
        var hp = prompt('Enter hp')
    };

var monster = {
    Monster: monsterName,
    Power: monsterHp
};
var monsters = []
var monsterCount = 5;

while ( monsters.length < monsterCount) {
    var monster = {};
   
    monster.monsterName = prompt("Enter monster name: ");
    monster.monsterHp = prompt('Enter monster hp: '); 
    monsters.push(monster);
}

console.log(monsters);
