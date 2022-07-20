/* create a student object with the following 3 properties:
name
age
major
*/

let student = {
    name: "Jose",
    age: 27,
    major: "Accounting",
}

console.log(student.name);
student.age++;
console.log(student.age);

student.graduationYear = 2025;
console.log(student);

//hasOwn - checks to see if an object contains a certain key
// Object.hasOwn(objectName, "key")
console.log("\nHas Own");
console.log(Object.hasOwn(student, "name"));
console.log(Object.hasOwn(student, "age"));
console.log(Object.hasOwn(student, "minor"));

//better to use than undefined check
if(Object.hasOwn(student, "minor")){
    console.log(`This student's minor is: ${student.minor}`);
} else {
    console.log(`This student does not have a minor`);
}

// if(student.minor === undefined){
//     console.log("Student minor is undefined");
// }

//Object.keys()
//gives us an array of each key that the object contains
//Object.keys(objectName)
console.log(Object.keys(student));

//Object.values()
//gives us an array of each value that the object contains
//Object.values(objectName)
console.log(Object.values(student));

//Object.entries()
//turns object key values pairs into an array of key value pairs in the following format:
// [key, value] where index 0 is always the key, and index 1 is always the value
console.log(Object.entries(student));

let entries = Object.entries(student);

console.log("\nFor Loop\n")
for(let i = 0; i < entries.length; i++){
    console.log(entries[i]);
}