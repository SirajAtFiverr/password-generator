let alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
                    "S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j",
                    "k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
                ":",";","<",">",".","?", "/"];

let lengthOfPassword = 15;
let minLength = 5;
let maxLength = 20;
let numbersAdded = false;
let symbolsAdded = false;

let lengthOfPasswordEl = document.getElementsByClassName("password-length")[0];
let addNumbersEl = document.getElementsByClassName("add-numbers")[0];
let addSymbolsEl = document.getElementsByClassName("add-symbols")[0];
let password1El = document.getElementsByClassName("password-1")[0];
let password2El = document.getElementsByClassName("password-2")[0];
let copyTextMessageEl = document.getElementsByClassName("copy-password-message")[0];

addNumbersEl.addEventListener("click", function(){
    if(numbersAdded){
        numbersAdded = false;
        addNumbersEl.style.opacity = 0.5;
        addNumbersEl.style.boxShadow = '0 0 3px 0 white';
    }else{
        numbersAdded = true;
        addNumbersEl.style.opacity = 1;
        addNumbersEl.style.boxShadow = 'none';
    }
    
});
addSymbolsEl.addEventListener("click", function(){
    if(symbolsAdded){
        symbolsAdded = false;
        addSymbolsEl.style.opacity = 0.5;
        addSymbolsEl.style.boxShadow = '0 0 3px 0 white';
    }else{
        symbolsAdded = true;
        addSymbolsEl.style.opacity = 1;
        addSymbolsEl.style.boxShadow = 'none';
    }
});

password1El.addEventListener("click", function (){
    if(!password1El.textContent) return ;
    copyToClipboard(password1El.textContent);
});

password2El.addEventListener("click", function (){
    if(!password2El.textContent) return ;
    copyToClipboard(password2El.textContent);
});

function copyToClipboard(text){
    navigator.clipboard.writeText(text);
    copyTextMessageEl.style.visibility = "visible";

    setTimeout(function(){
        copyTextMessageEl.style.visibility = "hidden";
    }, 2000);
}

function getRandomCharacter(characters){
    return characters[Math.floor(Math.random() * characters.length)]
}

function generatePassword(){

    let characters = alphabets;
    if(numbersAdded){
        characters = characters.concat(numbers);
    }
    if(symbolsAdded){
        characters = characters.concat(symbols);
    }

    let userInput = lengthOfPasswordEl.value;
    if(userInput){

        lengthOfPassword = userInput;
        if(userInput > maxLength){
            lengthOfPassword = 20;
        }else if(userInput < minLength){
            console.log(userInput);
            lengthOfPassword = 5;
        }

    }else{
        lengthOfPassword = 15;
    }

    let password1 = '';
    let password2 = '';
    for(let i = 0; i < lengthOfPassword; i++){
        password1 += getRandomCharacter(characters);
        password2 += getRandomCharacter(characters);
    }
    
    password1El.textContent = password1;
    password2El.textContent = password2;
}