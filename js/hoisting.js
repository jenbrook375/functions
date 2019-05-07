funcDeclaration(); // can be called before it is called (hoisted)
function funcDeclaration() {
    console.log('inside a hoisted function declaration');
}

//funcExprerssion(); // can't call it before it's defined because it's not really a function, it's a variable
var funcExprerssion = function() {
    //console.log('inside a function declaration');
}
funcExprerssion();
console.log('inside a non-hoisted declaration'); // can be displayed now that it's been called after the function