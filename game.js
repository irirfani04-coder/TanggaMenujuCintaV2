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
cekPertanyaan();
}; 

const pertanyaan = {
5:"Apa kesan pertamamu saat mengenalku? ❤️",
10:"Menurutmu aku orang yang seperti apa?",
15:"Kalau aku ngajak jalan, kamu mau nggak? 😊",
20:"Apa yang paling kamu suka dariku?",
25:"Pernah kangen sama aku nggak? 🤭",
30:"Menurutmu kita cocok nggak?",
40:"Kalau aku diam seharian, kamu bakal nyariin nggak?",
50:"Kasih aku satu pujian yang paling jujur ❤️",
60:"Kalau aku bilang sayang, kamu jawab apa?",
70:"Apa impianmu kalau kita bersama?",
80:"Kalau kita berjodoh, tempat pertama yang ingin kita datangi di mana?",
90:"Seberapa besar rasa sayangmu kepadaku? ❤️",
100:"💌 Maukah kamu menjalani kisah ini bersamaku?"
};

function cekPertanyaan(){
    if(pertanyaan[posisi]){
        alert(pertanyaan[posisi]);
    }
}
