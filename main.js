console.log("Halo semua")
alert("Activity 7 - FItri Alfiana")
document.getElementById("nama") .innerHTML = "Fitri Alfiana";

//DOM CSS untuk digunakan pada HTML
document.getElementById("nama").style.color = "red";

//Function javascript
function halo(){
    alert("Praktikum 7");
}
let nama = document.getElementById("nama");

nama.addEventListener("click", function nama(){
    alert("Selamat mendengarkan")
})

Date()

let tanggal = new Date()
document.getElementById("tanggal").innerHTML = tanggal