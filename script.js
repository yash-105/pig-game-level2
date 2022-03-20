let activeplayer = 1;
let newgame = document.querySelector('.btn1');
let gamezone = document.querySelector('.gamezone');
let score1 = 0, score2 = 0;
let currscore1 = 0, currscore2 = 0;
let diceimage = document.querySelector('.box');
let displayscore1 = document.querySelector('.score1');
let displayscore2 = document.querySelector('.score2');
let displaycurrscore1 = document.querySelector('.currscore1');
let displaycurrscore2 = document.querySelector('.currscore2');
let roll = document.querySelector('.btn2');
let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let hold = document.querySelector('.btn3');
let displaywinner = document.querySelector('.winner h1');
let start = document.querySelector('.start');
displaywinner.style.visibility = "hidden";



start.addEventListener('click', function () {
    displaywinner.style.visibility = "visible";
    gamezone.style.opacity = "1";
    start.style.opacity = "0";
    start.style.opacity = "0";
    displaywinner.innerText = "player 1's turn";
    start.style.zIndex = "0";

});

let winnerfound = 0;
diceimage.style.visibility = "hidden";


    hold.addEventListener('click', function () {
        diceimage.style.visibility = "hidden";
        if (activeplayer === 1) {
            score1 += currscore1;
     
       
        } else {
            score2 += currscore2;
       
        }
        displayscore1.innerText = score1;
        displayscore2.innerText = score2;
        toggleplayer();
        if (score1 >= 100) {
            displaywinner.innerText = "PLAYER 1 IS WINNER!"
            winnerfound = 1;
        }
        if (score2 >= 100) {
            displaywinner.innerText = "PLAYER 2 IS WINNER!"
            winnerfound = 1;
        }
        if (winnerfound === 1)
            {
            displaywinner.style.marginTop = "40vh";
            gamezone.style.opacity = "0";
            start.style.opacity="1";
        }
        if (displaywinner.style.visibility === "visible")
            {
                start.innerText = "Play Again";
            }
    });

    roll.addEventListener('click', function () {
        let r = Math.floor(Math.random() * 6) + 1;
        console.log(r);
        diceimage.style.visibility = "visible";

        diceimage.style.backgroundImage = `url(./images/dice-${r}.png)`
        if (r == 1) {
           
        
            toggleplayer();
        } else if (activeplayer === 1) {
            currscore1 += r;
        } else {
            currscore2 += r;
        }
        displaycurrscore1.innerText = currscore1;
        displaycurrscore2.innerText = currscore2;
    });

    function toggleplayer() {
       
        currscore1 = 0;
        currscore2 = 0;
        displaycurrscore1.innerText = '0';
        displaycurrscore2.innerText = '0';
        if (activeplayer === 1) {
            activeplayer = 2;
            p1.style.backgroundColor = "#a2b8ec";
            p2.style.backgroundColor = "#2D31FA";
            displaywinner.innerText = "player 2's turn";
        } else {
            activeplayer = 1;
            p1.style.backgroundColor = "#2D31FA";
            p2.style.backgroundColor = "#a2b8ec";
            displaywinner.innerText = "player 1's turn";
        }
    }




    newgame.addEventListener('click', function () {
        diceimage.style.visibility = "hidden";
        activeplayer = 1;
        p2.style.backgroundColor = "#a2b8ec";
        p1.style.backgroundColor = "#2D31FA";
        displaycurrscore1.innerText = '0';
        displaycurrscore2.innerText = '0';
        displayscore1.innerText = '0';
        displayscore2.innerText = '0';
        diceimage.style.backgroundImage = "url('./images/dice-1.png')";
    });
