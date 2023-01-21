


let money = 0;
let bank = 0;
let eror = 0;
let hack = 0;
//? hack funcain
function hackk(){
    hack = hack + 1;
    localStorage.setItem("hack", hack);
erorr
    if (hack == 5) {

        hack = 0; 
        money = 0;
        
        localStorage.setItem("money", money);
        localStorage.setItem("hack", hack);
        document.getElementById("h1").innerHTML = localStorage.getItem("money")
        document.getElementById("h12").innerHTML = localStorage.getItem("bank")
        hack = 0; 
        money = 0;
     new Audio('df.mp3').play();
     eror = eror + 1;
     localStorage.setItem("eror", eror);
     erorr();
     lose();
     win();
    }


    

}
//! error funcain

function erorr() {
    while (localStorage.getItem("eror") == 5) {
        money = 0;
        bank = 0;
        localStorage.setItem("money", money);
        localStorage.setItem("bank", bank);
 alert("get out of here")
 eror = 5;
 localStorage.setItem("eror", eror); 
 lose();
   
}
}

//? whan you prees on despit it wiil add a 10 dolar to your wallet
document.getElementById("despit").onclick = despit;

function despit(){
    hackk();

    money = money + 10;
    localStorage.setItem("money", money);
    localStorage.setItem("bank", bank);
    document.getElementById("h1").innerHTML = localStorage.getItem("money")
    lose();
    if(money >= 100){
        money = 0;
        bank = bank + 100;
        localStorage.setItem("money", money);
        localStorage.setItem("bank", bank);

document.getElementById("h1").innerHTML = localStorage.getItem("money")
document.getElementById("h12").innerHTML = localStorage.getItem("bank")

localStorage.setItem("money", money);
localStorage.setItem("bank", bank);

alert("you can hold up to 100 dolar");
hackk();
win();

lose();

}


} 

document.getElementById("windrow").onclick = windrow;
//! its add 10 dolar to your bank and take 10 dolar from your cash
function windrow(){
 {
    if(money => 10)
    bank = bank + 10;
    money = money - 5;
    localStorage.setItem("money", money);
    localStorage.setItem("bank", bank)
    document.getElementById("h1").innerHTML = localStorage.getItem("money")
    document.getElementById("h12").innerHTML = localStorage.getItem("bank")

    hack = hack - 1;
    localStorage.setItem("hack", hack);
 new Audio('dd.mp3').play();
 lose();
 win();
}
}



//! its turn on all te funcain whan we enter to the website
window.onload = function() {
    document.getElementById("h1").innerHTML = localStorage.getItem("money")
    document.getElementById("h12").innerHTML = localStorage.getItem("bank")
    eror = eror - 1;
    localStorage.setItem('eror', eror);

    hackk();
    erorr();
    lose();
    win();
}




//! hunred lins of code wow!!!!!!!!!!!!!


//! whan your bank acount or your cash = 0 than the game stops
function lose() {

    if (0 >= localStorage.getItem('money')) {
alert("you lose next time")
money = 0;
localStorage.setItem("money", money);



    }
}

//! whan your bank acount = 1000 than you win the game and your bank and cash reset
function win() {
    if (localStorage.getItem('bank') == 1000) {
money = 10;
bank = 0;
localStorage.setItem("money", money);
localStorage.setItem('bank', bank);
alert("wow you win you are the best the game will restart")


}
}

//! 150 lins of code