


let money = 0;
let bank = 0;
let eror = 0;
let hack = 0;

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
    
    }


    

}

function erorr() {
    while (localStorage.getItem("eror") == 5) {
 alert("get out of here")   
}
}

//? whan you prees on despit it wiil add a 10 dolar to your wallet
document.getElementById("despit").onclick = despit;

function despit(){
    hackk();

    money = money + 10;
    localStorage.setItem("money", money);
    localStorage.setItem("bank", bank)
    document.getElementById("h1").innerHTML = localStorage.getItem("money")
    
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



}


} 

document.getElementById("windrow").onclick = windrow;

function windrow(){
 {
    if(money => 10)
    bank = bank + 10;
    money = money - 10;
    localStorage.setItem("money", money);
    localStorage.setItem("bank", bank)
    document.getElementById("h1").innerHTML = localStorage.getItem("money")
    document.getElementById("h12").innerHTML = localStorage.getItem("bank")

    hack = hack - 1;
    localStorage.setItem("hack", hack);
 new Audio('dd.mp3').play();
   

}
}




window.onload = function() {
    document.getElementById("h1").innerHTML = localStorage.getItem("money")
    document.getElementById("h12").innerHTML = localStorage.getItem("bank")
    
    
}




//! hunred lins of code wow