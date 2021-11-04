console.log('test string')

//NAME INPUT BOX CODE
// set dom variables
const inputEl = document.getElementById('input-box');
//console.log(inputEl.value);
const buttonEl = document.getElementById('button');
//console.log(buttonEl.textContent);
const nameEl = document.getElementById('name');
//console.log(nameEl.textContent);


// set event listener

buttonEl.addEventListener('click', () =>{
    // do magic code - make the name tag be the name entered
    nameEl.textContent = inputEl.value;
    console.log(nameEl.textContent);

    //reset the input field
    inputEl.value = "";
    
})


//COLOR BUTTONS CODE

// set dom variables
const buttonPinkEl = document.getElementById('pink');
//console.log(buttonPinkEl.textContent);
const buttonLightGreenEl = document.getElementById('lightgreen');
const buttonLightBlueEl = document.getElementById('lightblue');
const nameTagColor = document.getElementById('name-tag');
//console.log(nameTagColor.backgroundColor);

//pink button listener

buttonPinkEl.addEventListener('click', ()=>{
    //make pink code
    nameTagColor.style.backgroundColor = "pink";
})

buttonLightGreenEl.addEventListener('click', ()=>{
    //make pink code
    nameTagColor.style.backgroundColor = "lightgreen";
})

buttonLightBlueEl.addEventListener('click', ()=>{
    //make pink code
    nameTagColor.style.backgroundColor = "lightblue";
})


//ADD PRONOUNS CODE

//set dom variables

const inputPronounsEl = document.getElementById('pronouns-input');
const buttonPronounsEl = document.getElementById('pronouns-button');
const displayPronounsEl = document.getElementById('pronouns-display');

//set event listener
buttonPronounsEl.addEventListener('click', () =>{
    //add the pronouns
    displayPronounsEl.textContent = inputPronounsEl.value;
    //console.log(displayPronounsEl.textContent);

    //reset the input field
    inputPronounsEl.value = "";
    
})



//CHANGE THE FONT CODE

const dropdownFontEl = document.getElementById('font-dropdown');
const buttonFontEl = document.getElementById('font-button');
// const nameEl = document.getElementById('name');

buttonFontEl.addEventListener('click', () =>{
    nameEl.style.fontFamily = dropdownFontEl.value;
})


