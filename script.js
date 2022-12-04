//Variabler:
let randomNumber = Math.ceil(Math.random() * 3);
console.log(randomNumber);
let amountWon = 0;
let amountLost = 0;

//Variabler + eventlistener angående namn funktion:
const btnNamn = document.querySelector('#namn-btn');
btnNamn.addEventListener('click', namnet);
let namn;
let h3 = document.querySelector('h3');
const gameResult = document.querySelector('#win-loss');

//Funktion för spelarens namn:
function namnet(event){
    event.preventDefault();

    const inputNamn = document.querySelector('#namn-input');
    namn = inputNamn.value;
    
    h3.innerText = `0 (${namn}) - 0 (CPU)`;
        
    inputNamn.value = '';
}

//Hämtar knapparna i en container och aktiverar deras funktion:
const runda = document.querySelector('#runda-p');
const spel = document.querySelector('#btn-container');
spel.addEventListener('click', spelVal);

//Funktionen som är spelet:
function spelVal(event) {
    if(event.target.tagName == 'BUTTON'){
        const plays = document.querySelector('h2');

        //If-case för spelet:
        if(event.target.innerText === "Sten"){
            if(randomNumber == 1){
                h3.innerText = `${amountWon} (${namn}) - ${amountLost} (CPU)`;
                runda.innerText = "Det blev lika, kör igen";
                randomNumber = Math.ceil(Math.random() * 3);

                plays.innerText = "Sten vs Sten";
            }
            else if(randomNumber == 2){
                amountWon++;
                h3.innerText = `${amountWon} (${namn}) - ${amountLost} (CPU)`;
                runda.innerText = "Du vann";
                randomNumber = Math.ceil(Math.random() * 3);
                plays.innerText = "Sten vs Sax";
            }
            else{
                amountLost++;
                h3.innerText = `${amountWon} (${namn}) - ${amountLost} (CPU)`;
                runda.innerText = "Du förlorade";
                randomNumber = Math.ceil(Math.random() * 3);
                plays.innerText = "Sten vs Påse";
            }
        }

        else if(event.target.innerText === "Sax"){
            if(randomNumber == 1){
                amountLost++;
                h3.innerText = `${amountWon} (${namn}) - ${amountLost} (CPU)`;
                runda.innerText = "Du förlorade";
                randomNumber = Math.ceil(Math.random() * 3);
                plays.innerText = "Sax vs Sten";
            }
            else if(randomNumber == 2){
                h3.innerText = `${amountWon} (${namn}) - ${amountLost} (CPU)`;
                runda.innerText = "Det blev lika";
                randomNumber = Math.ceil(Math.random() * 3);
                plays.innerText = "Sax vs Sax";
            }
            else{
                amountWon++;
                h3.innerText = `${amountWon} (${namn}) - ${amountLost} (CPU)`;
                runda.innerText = "Du vann";
                randomNumber = Math.ceil(Math.random() * 3);
                plays.innerText = "Sax vs Påse";
            }
        }

        else{
            if(randomNumber == 1){
                amountWon++;
                h3.innerText = `${amountWon} (${namn}) - ${amountLost} (CPU)`;
                runda.innerText = "Du vann";
                randomNumber = Math.ceil(Math.random() * 3);
                plays.innerText = "Påse vs Sten";
            }
            else if(randomNumber == 2){
                amountLost++;
                h3.innerText = `${amountWon} (${namn}) - ${amountLost} (CPU)`;
                runda.innerText = "Du förlorade";
                randomNumber = Math.ceil(Math.random() * 3);
                plays.innerText = "Påse vs Sax";
            }
            else{
                h3.innerText = `${amountWon} (${namn}) - ${amountLost} (CPU)`;
                runda.innerText = "Det blev lika";
                randomNumber = Math.ceil(Math.random() * 3);
                plays.innerText = "Påse vs Påse";
            }
        }

        // If-case för vem som vinner spelet:
        if(amountWon >= 3){
            gameResult.innerText = "Du vann spelet!";
            spel.removeEventListener('click', spelVal);
        }
        else if(amountLost >= 3){
            gameResult.innerText = "Du förlorade spelet!";
            spel.removeEventListener('click', spelVal);
        }
        else{
            gameResult.innerText = "---";
        }
    }
}

const reset = document.querySelector('#reset-btn');
reset.addEventListener('click', resetbtn);

function resetbtn(event){
    namn = "";
    h3.innerText = "0 (du) - 0 (CPU)";
    amountWon = 0;
    amountLost = 0;
    runda.innerText = "Väntar på input...";
    gameResult.innerText = "-----";
    spel.addEventListener('click', spelVal);
}