

document.getElementById("btn").onclick = function() {
    
let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
let user = localStorage.getItem("username");
let pass = localStorage.getItem("password");

if (user == username && pass == password) {
    alert("good job")
}
else {
    alert("wrong")
}

}