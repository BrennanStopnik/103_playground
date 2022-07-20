// Every javascript value has an inherent truthy or falsy boolean value

if(true) {
    console.log("Truthy")
}

if(false) {
    console.log("will this run?");
} else {
    console.log("Falsy");
}

/*
Falsy values
false
0
null
undefined
''
NaN
*/

//(mostly) Everything else is considered truthy
//Empty array [] is truthy
//Empty object {} is truthy
let testBoolean = {};
if (testBoolean) {
    console.log(testBoolean + " is truthy");
} else {
    console.log(testBoolean + " is falsy");
}

let exampleBoolean = true;
//we are able to use single value boolean statements to determine if something is true or false like so
if(exampleBoolean){
    console.log("This is true!");
}