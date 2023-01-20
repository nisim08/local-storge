


let money = 0;
let bank = 0;
let eror = 0;



document.getElementById("despit").onclick = despit;

function despit(){
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
eror = eror + 1;



}


} 

document.getElementById("windrow").onclick = windrow;

function windrow() {
    let x = window.prompt("how much do you want to despit")
    if(money >= x){
     bank = localStorage.getItem("bank") + x;
     money = localStorage.getItem("money") - x;
     
     localStorage.setItem("money", money);
     localStorage.setItem("bank", bank);

     document.getElementById("h1").innerHTML = localStorage.getItem("money")
     document.getElementById("h12").innerHTML = localStorage.getItem("bank")

     eror = eror + 1

     
}

else {
    alert("you don't have enough money")
    eror = eror + 1;
    
}
}





window.onload = function() {
    document.getElementById("h1").innerHTML = localStorage.getItem("money")
    document.getElementById("h12").innerHTML = localStorage.getItem("bank")
}
