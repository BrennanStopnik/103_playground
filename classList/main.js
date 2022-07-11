// classList - converts all classes that an element contains into a nice array that we can work with
    // classList[0] grabs the first class in the list
    // classList[classList.length -1] grabs the last one in the list


let buttonList = document.querySelectorAll("#parent button");

for (let i = 0; i < buttonList.length; i++){
    let button = buttonList[i];
    button.addEventListener('click', function(){
        // console.log(button.innerText);
        // console.log(button.classList);
        let buttonClassList = button.classList;

        // These are strictly classList functions NOT Array functions
        // buttonClassList.add('active');
        // or button.classList.add('active');
        
        // buttonClassList.remove('active');
        // or button.classList.remove('active');

        // toggles between a class on and off.
        buttonClassList.toggle("active");

        // Replaces whats there with somethng else
        // buttonClasslist.replace("active", "not-active");


    })
}



