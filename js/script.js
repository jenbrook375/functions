// declare a function (name parameters)
function formatName(firstName, lastName){
    console.log(firstName);
    console.log(lastName);
    // console.log(lastName + ' ' + firstName); 
   // return lastName + ' ' + firstName;
   var formattedName = lastName + ' ' + firstName;

   // TODO: check if username isalready saved in localStorage, if it is, then don't overwrite, if not then save it
   if (!localStorage.getItem('username')) {

   } else {
   localStorage.setItem('username', formattedName); // save to local storage
   }

   return formattedName;
}

// arguments
var firstName = 'Jennifer';
var lastName = 'Brookshire';

// call the function (pass in arguments)
formatName(firstName, lastName);

// function expression:
var createUserObj = function (firstName, lastName) {
    var userObj = {
    name: formatName(firstName, lastName),
        age: null
    };
    return userObj; // add last set tof parenthesis to evalueate expression immediately after creation function expressions are usually only used once
}


// constructor
var concatinate = new Function('x', 'y', 'return x + y' );
