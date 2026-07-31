// ===============================
// Tangga Menuju Cinta Wulan Cantik
// Version 2.0
// ===============================

// Animasi hati

const heartContainer = document.getElementById("hearts");

if (heartContainer) {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.className = "heart";

        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize = (15 + Math.random() * 20) + "px";

        heart.style.animationDuration = (4 + Math.random() * 4) + "s";

        heartContainer.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        },8000);

    },300);

}


// Tombol Mulai

const start = document.getElementById("start");

if(start){

start.onclick=function(){

start.innerHTML="💕 Menyiapkan Permainan...";

start.disabled=true;

setTimeout(()=>{

window.location.href="game.html";

},1500);

}

}