


let n = 0
localStorage.setItem("eror", n)


document.getElementById("btn").onclick = function() {
    
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
let user = localStorage.getItem("username");
let pass = localStorage.getItem("password");

if (user == username && pass == password) {
    alert("good job")
}
else {
    n = n + 1;
      document.getElementById("erors").innerHTML = n;
      if(n == 3) {
        window.location.href = "https://www.youtube.com/watch?v=hvFIPL8bR6Y"
      } 
}
}