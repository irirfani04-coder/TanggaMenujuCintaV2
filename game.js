// ===========================
// Tangga Menuju Cinta
// Modul 1
// ===========================

const board = document.getElementById("board");
const dice = document.getElementById("dice");
const roll = document.getElementById("roll");
const status = document.getElementById("status");
let posisi = 1;

const player = document.createElement("div");
player.id = "player";
player.innerHTML = "❤️";


// Membuat 100 kotak
for(let i=100;i>=1;i--){

    const box=document.createElement("div");

    box.className="box";

    box.innerHTML=i;

    board.appendChild(box);

}
document.querySelectorAll(".box")[99].appendChild(player);
// Tombol Dadu

roll.onclick=function(){

    const angka=Math.floor(Math.random()*6)+1;
posisi += angka;

if (posisi > 100) posisi = 100;

document.querySelectorAll(".box").forEach(box=>{
    if(box.contains(player)){
        box.removeChild(player);
    }
});

document.querySelectorAll(".box")[100-posisi].appendChild(player);
    dice.innerHTML=angka;

    status.innerHTML="💖 Kamu mendapatkan angka "+angka;

}; 
