let myArr = ["apple", "orange", "nectarine"];

// For Loop
console.log("For Loop: \n")
for (let i = 0; i < myArr.length; i++){
    console.log(myArr[i]);
}

// For Each
console.log("\nFor Each: \n")
myArr.forEach(function(item){
    console.log(item);
})