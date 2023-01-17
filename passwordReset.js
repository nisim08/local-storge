


document.getElementById("btn").onclick = function() {


    localStorage.setItem("username", document.getElementById("newuser").value);
    localStorage.setItem("password", document.getElementById("newpass").value);
window.location.href = "index.html";


}