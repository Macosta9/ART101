/**
 * Mariana Acosta
 * 05.01.2024
 **/

//sortUserName - a function that takes user input and sorts the letters
//of their name


function getNameAndSort() {
    const userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    console.log("userName =", userName);
    let nameArray = userName.split('').sort().join('');
    console.log("nameArray =", nameArray);
    return nameArray;
    }

// output
document.writeln("Oh hey, I've fixed your name: ",
    getNameAndSort(), "</br>");