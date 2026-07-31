// ===========================
// Tangga Menuju Cinta
// Modul 1
// ===========================

const board = document.getElementById("board");
const dice = document.getElementById("dice");
const roll = document.getElementById("roll");
const status = document.getElementById("status");

// Membuat 100 kotak
for(let i=100;i>=1;i--){

    const box=document.createElement("div");

    box.className="box";

    box.innerHTML=i;

    board.appendChild(box);

}

// Tombol Dadu

roll.onclick=function(){

    const angka=Math.floor(Math.random()*6)+1;

    dice.innerHTML=angka;

    status.innerHTML="💖 Kamu mendapatkan angka "+angka;

};