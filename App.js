const RollDice = document.getElementById('RollDice');
const Hold = document.getElementById('Hold');
const NewGame = document.getElementById('NewGame');
const DivimageDice = document.getElementById('DivimageDice');
const diceimage = document.getElementById('diceimage');


const RefflesNowPlayer1 = document.getElementById('RefflesNowPlayer1');
const asidPlayer1 = document.getElementById('asidLeft');
const globalScorePlayer1 = document.getElementById('globalScorePlayer1');
const redPointPlayer1 = document.getElementById('redPointPlayer1');
const player1Name = document.getElementById('player1Name');
let sumCurrentPlayer1 = 0;
let sumGlobalPlayer1 = 0;

const RefflesNowPlayer2 = document.getElementById('RefflesNowPlayer2'); 
const asidPlayer2 =  document.getElementById('asidRight');
const globalScorePlayer2 = document.getElementById('globalScorePlayer2');
const redPointPlayer2 = document.getElementById('redPointPlayer2');
const player2Name = document.getElementById('player2Name'); 
let sumCurrentPlayer2 = 0;
let sumGlobalPlayer2 = 0;


let torun = 0;
let random;
let disqualification;
let wasVictory = 0;


RollDice.onclick = function(){
    if(wasVictory < 1){
    if(torun % 2 == 0){
    
    handleDisplayColor();
    getRandomNumber();
    visibleDice();
    let thereDisqualification = handleDisqualification(disqualification , torun);
    if(thereDisqualification == true){
        sumGlobalPlayer1 += sumCurrentPlayer1;
        globalScorePlayer1.innerHTML = sumGlobalPlayer1;
        disqualification = 0;
        RefflesNowPlayer1.innerHTML = 0;
        torun++;
        handleDisplayColor();
    }
  }
  else{
    getRandomNumber();
    visibleDice();
    let thereDisqualification = handleDisqualification(disqualification , torun);
    if(thereDisqualification == true){
        sumGlobalPlayer2 += sumCurrentPlayer2;
        globalScorePlayer2.innerHTML = sumGlobalPlayer2;
        disqualification = 0;
        RefflesNowPlayer2.innerHTML = 0;
        torun++;
        handleDisplayColor();
    }
  }
 }
}

Hold.onclick = function(){
    if(wasVictory < 1){
    if(torun % 2 == 0){
        sumGlobalPlayer1 += sumCurrentPlayer1;
        globalScorePlayer1.innerHTML = sumGlobalPlayer1;
        sumCurrentPlayer1 = 0;
        RefflesNowPlayer1.innerHTML = 0;
        chackIfPlayerWin(sumGlobalPlayer1 , wasVictory);
    }
    else{
        sumGlobalPlayer2 += sumCurrentPlayer2;
        globalScorePlayer2.innerHTML = sumGlobalPlayer2;
        sumCurrentPlayer2 = 0;
        RefflesNowPlayer2.innerHTML = 0;
        chackIfPlayerWin(sumGlobalPlayer2 , wasVictory);
    }
     if(wasVictory == 0){
        torun++;
        handleDisplayColor();
        hiddenDice();
    }
    else{
        hiddenDice();
    }
  }
}

NewGame.onclick = function(){
    HafterWin();
}

function handleDisplayColor(){
    if(torun % 2 == 0){
        redPointPlayer1.style = "display:inline";
        asidPlayer1.style = "background-color: rgb(247, 245, 247);"
        player1Name.style = "color: rgb(139, 138, 139);"
        redPointPlayer2.style = "display:none";
        asidPlayer2.style = "background-color: rgb(255 , 255 , 255);" 
        player2Name.style = "color: rgb(210, 209, 210);"
        hiddenDice();
    }
else{
        redPointPlayer2.style = "display:inline";
        asidPlayer2.style = "background-color: rgb(247, 245, 247);"
        player2Name.style = "color: rgb(139, 138, 139);"
        redPointPlayer1.style = "display:none";
        asidPlayer1.style = "background-color: rgb(255 , 255 , 255);" 
        player1Name.style = "color: rgb(210, 209, 210);"
        hiddenDice();
    }
}

function handleDisqualification(disqualification , torun){
    if(disqualification == 1){
        return true;
      }
       else{
        return false
       }
   }
  

function getRandomNumber(){
      let numberRandom = Math.floor((Math.random() * 6) + 1);
      
    switch (numberRandom) {
        case 1:
            DivimageDice.innerHTML = '<img src="./image/dice-1.png" alt="" id = "diceimage">';
        break;
    
        case 2:
           DivimageDice.innerHTML = '<img src="./image/dice-2.png" alt="" id = "diceimage">';
        break;
    
        case 3:
           DivimageDice.innerHTML = '<img src="./image/dice-3.png" alt="" id = "diceimage">';
        break;
    
        case 4:
           DivimageDice.innerHTML = '<img src="./image/dice-4.png" alt="" id = "diceimage">';
        break;
    
        case 5:
           DivimageDice.innerHTML = '<img src="./image/dice-5.png" alt="" id = "diceimage">';
        break;
    
        case 6:
           DivimageDice.innerHTML = '<img src="./image/dice-6.png" alt="" id = "diceimage">';
        break;
    }
    if(numberRandom != 1){
        if(torun % 2 == 0){
            sumCurrentPlayer1 += numberRandom;
            RefflesNowPlayer1.innerHTML = sumCurrentPlayer1;
        }
        else{
            sumCurrentPlayer2 += numberRandom;
            RefflesNowPlayer2.innerHTML = sumCurrentPlayer2;
        }
    }
    else{
        if(torun % 2 == 0){
             sumCurrentPlayer1 = 0;
        }
        else{
             sumCurrentPlayer2 = 0;
        }
            return disqualification = 1;
    }
}
 
function chackIfPlayerWin(sum , Victory){
    if(sum >= 100){
        if(torun % 2 == 0){
            player1Name.style = "color:red";
            player1Name.innerHTML = "WINNER!!!";
            wasVictory++;
            torun = 0;
        }
        else{
            player2Name.style = "color:red";
            player2Name.innerHTML = "WINNER!!!";
            wasVictory++;
            torun = 0;
        }
            redPointPlayer1.style = "display:none";
            redPointPlayer2.style = "display:none";
    }
}

function visibleDice(){
    DivimageDice.style = " z-index: 1";
}

function hiddenDice(){
    DivimageDice.style = " z-index: 0";
}

function HafterWin(){
    player1Name.style = "color: rgb(139, 138, 139)";
    player1Name.innerHTML = "PLAYER 1";
    player2Name.style = "color: rgb(210, 209, 210)";
    player2Name.innerHTML = "PLAYER 2";
    hanbleReset();
    
} 

function hanbleReset() {
    torun = 0;
    disqualification = 0;
    RefflesNowPlayer1.innerHTML = 0;
    globalScorePlayer1.innerHTML = 0;
    RefflesNowPlayer2.innerHTML = 0;
    globalScorePlayer2.innerHTML = 0;
    
    sumCurrentPlayer1 = 0;
    sumGlobalPlayer1 = 0;
    sumCurrentPlayer2 = 0;
    sumGlobalPlayer2 = 0;
    handleDisplayColor();
    hiddenDice();
}
