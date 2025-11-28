// document.getElementById("counter").innerText = 0;

let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment (){
    count += 1;
    countEl.textContent = count;
}

function save(){
    let content = count + " - ";
    saveEl.textContent += content;
    countEl.textContent = 0;    
    count = 0;
}



/* let name = "Sylvia";
let greeting = "Hi, my name is";
let myGreeting = greeting + " " + name;
console.log(myGreeting);
*/

/*
let welcomeEl = document.getElementById("welcome-el");

let name = "Sylvia!";
let greeting = "Welcome back, ";

let welcomeMsg = greeting + name;
welcomeEl.innerText = welcomeMsg;

// add emoji
welcomeEl.innerText += "👋";
*/