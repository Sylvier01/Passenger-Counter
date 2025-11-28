let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let resetEntriesBtn = document.getElementById("reset-entries-btn");

function increment (){
    count += 1;
    countEl.textContent = count;
}

function save(){
    let entrieDetails = count + " - ";
    saveEl.textContent = saveEl.textContent + entrieDetails;
    countEl.textContent = 0;    
    count = 0;
}

function resetEntries(){
    saveEl.textContent = "Previous Entries:";
}

