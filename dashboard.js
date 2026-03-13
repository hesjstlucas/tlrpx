function login(){

let user = document.getElementById("username").value
let pass = document.getElementById("password").value

if(user === "admin" && pass === "1234"){

document.getElementById("panel").style.display = "block"

}

else{

alert("Invalid login")

}

}

function addInfraction(){

let name = document.getElementById("staffName").value
let reason = document.getElementById("reason").value

let list = document.getElementById("infractions")

let item = document.createElement("li")

item.textContent = name + " - " + reason

list.appendChild(item)

}
