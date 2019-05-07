// scope
var globalVar = 'Hello World';

function sayHello() {
    console.log(globalVar); // global variable

    var funcVar = 'I\'m scoped inside a function';
    console.log(funcVar); // local variable
}
sayHello();
console.log(globalVar);

if (true) {
    var blockVar = 'i\'m inside a block'; // is accesible outside of if statement
    // const  stores a constant value only cannot be reassigned
    const conVar = 'A const variable';
    console.log(conVar);
    console.log(blockVar);
}
console.log(blockVar);
//console.log(conVar); // only defined inside scope of if statement

function secondFunction() {
    //console.log(secondFunction);
}
secondFunction();

// nsted scope
function outerFunction () {
    const outer = 'defined in outerFunction';
    console.log(outer);

    function innerFunction() {
        const inner = 'defined in innerFunction';
        console.log(inner);
    }

    return innerFunction();
    //console.log(inner); // can't be accessed from outside innerFunction
}

outerFunction();
