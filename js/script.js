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

