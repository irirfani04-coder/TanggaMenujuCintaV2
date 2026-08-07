// ===========================
// Tangga Menuju Cinta
// Modul 1
// ===========================

const board = document.getElementById("board");
const dice = document.getElementById("dice");
const roll = document.getElementById("roll");
const status = document.getElementById("status");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const tutupPopup = document.getElementById("tutupPopup");
const jawabanPopup = document.getElementById("jawabanPopup");
const kirimJawabanPopup = document.getElementById("kirimJawabanPopup");
let posisi = 1;
const tangga = {
    3: 22,
    8: 30,
    28: 55,
    58: 77,
    75: 96
};
const ular = {
    17: 4,
    26: 10,
    39: 18,
    54: 34,
    62: 19,
    64: 60,
    87: 24,
    99: 78
};
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
let tujuan = posisi + angka;
    let animasi = setInterval(() => {

    if (posisi >= tujuan) {
    clearInterval(animasi);

    if (tangga[posisi]) {

    status.innerHTML = "🪜 Naik Tangga...";

    const tujuanTangga = tangga[posisi];

setTimeout(() => {

    posisi = tujuanTangga;
    pindahPion();

}, 500);

}

    if (ular[posisi]) {
        posisi = ular[posisi];
        pindahPion();
        status.innerHTML = "🐍 Digigit Ular!";
    }

    return;
}

    posisi++;
    pindahPion();

}, 300);

    

if (tujuan > 100) tujuan = 100;



    status.innerHTML="💖 Kamu mendapatkan angka "+angka;
cekPertanyaan();
}; 

const pertanyaan = {

1:"👋 Hai Wulan, siap memulai perjalanan ini?",
2:"Apa kesan pertamamu saat mengenalku?",
3:"Apa hal pertama yang kamu perhatikan dariku?",
4:"Menurutmu aku orang yang seperti apa?",
5:"Apa yang membuatmu mulai nyaman denganku?",
6:"Kalau kita bertemu sekarang, kamu mau ngapain dulu?",
7:"Apa makanan favoritmu?",
8:"Kalau diajak jalan, kamu pilih ke mana?",
9:"Kopi atau teh?",
10:"Apa warna favoritmu?",

11:"Kalau lagi sedih biasanya ngapain?",
12:"Apa lagu yang lagi sering kamu dengar?",
13:"Apa hobi yang paling kamu suka?",
14:"Kamu lebih suka chat atau telepon?",
15:"Pernah kepikiran tentang aku nggak?",
16:"Apa sifatku yang paling kamu suka?",
17:"Apa sifatku yang perlu diperbaiki?",
18:"Apa panggilan sayang yang lucu menurutmu?",
19:"Kalau aku ngilang sehari, kamu nyariin nggak?",
20:"Pernah kangen sama aku?",

21:"Apa momen paling berkesan saat ngobrol denganku?",
22:"Kalau aku ngajak nonton, kamu mau?",
23:"Gunung atau pantai?",
24:"Pagi atau malam?",
25:"Kalau hujan, enaknya ngapain?",
26:"Kalau aku ngasih bunga, reaksimu apa?",
27:"Apa arti perhatian menurutmu?",
28:"Menurutmu kita cocok nggak?",
29:"Kenapa menurutmu kita bisa dekat?",
30:"Kalau jalan berdua, mau pegangan tangan nggak?",

31:"Apa hal kecil yang bikin kamu bahagia?",
32:"Apa yang bikin kamu tersenyum hari ini?",
33:"Kalau aku sedih, kamu bakal ngapain?",
34:"Apa yang bikin hubungan langgeng?",
35:"Menurutmu cinta itu apa?",
36:"Apa ketakutanmu dalam hubungan?",
37:"Apa impianmu lima tahun lagi?",
38:"Kalau kita liburan, mau ke mana?",
39:"Apa kota impianmu?",
40:"Apa yang paling kamu suka dariku?",

41:"Apa yang bikin kamu nyaman sama aku?",
42:"Apa kenangan yang nggak bakal kamu lupa?",
43:"Kalau aku sakit, kamu bakal ngapain?",
44:"Apa hadiah yang paling kamu suka?",
45:"Lebih suka dipeluk atau digandeng?",
46:"Apa arti kesetiaan menurutmu?",
47:"Apa yang bikin kamu percaya sama seseorang?",
48:"Kalau kita foto bareng, pose apa?",
49:"Kalau aku bikin salah, kamu bakal gimana?",
50:"Kasih aku satu pujian yang jujur ❤️",

51:"Apa yang bikin kamu bangga sama seseorang?",
52:"Apa hal paling romantis menurutmu?",
53:"Kalau kita masak bareng, masak apa?",
54:"Film romantis favoritmu?",
55:"Kalau ulang tahunmu, pengen hadiah apa?",
56:"Apa kebiasaan lucumu?",
57:"Apa yang bikin kamu tertawa?",
58:"Kalau bisa mengulang waktu, mau ke momen apa?",
59:"Apa arti rumah menurutmu?",
60:"Kalau aku bilang sayang, kamu jawab apa?",

61:"Apa impian terbesar kita kalau bersama?",
62:"Kalau kita punya banyak waktu, mau ngapain?",
63:"Apa hal yang ingin kamu lakukan bareng aku?",
64:"Apa tempat yang ingin kita kunjungi?",
65:"Kalau ada masalah, lebih suka ngobrol atau diam?",
66:"Apa bahasa cinta (love language) kamu?",
67:"Apa yang bikin kamu merasa dicintai?",
68:"Apa harapanmu untuk hubungan ini?",
69:"Apa arti pasangan hidup menurutmu?",
70:"Apa impianmu kalau kita bersama?",

71:"Kalau kita tinggal serumah, siapa yang paling rajin?",
72:"Siapa yang lebih dulu minta maaf kalau berantem?",
73:"Kalau aku cemburu, kamu bakal gimana?",
74:"Apa hal yang ingin kamu ubah dari dunia?",
75:"Apa doa terbaikmu hari ini?",
76:"Kalau bisa meminta satu keajaiban, apa itu?",
77:"Apa arti bahagia menurutmu?",
78:"Kalau kita tua nanti, pengen tinggal di mana?",
79:"Apa yang bikin hidup terasa indah?",
80:"Kalau kita berjodoh, tempat pertama yang ingin kita datangi?",

81:"Apa kenangan yang ingin kita buat bersama?",
82:"Apa hal yang paling kamu syukuri?",
83:"Apa arti keluarga menurutmu?",
84:"Kalau aku melamar suatu hari nanti, apa reaksimu?",
85:"Apa mimpi terbesarmu?",
86:"Apa yang ingin kamu capai tahun ini?",
87:"Kalau aku jauh, kamu bakal nunggu nggak?",
88:"Apa arti setia menurutmu?",
89:"Apa arti saling percaya?",
90:"Seberapa besar rasa sayangmu kepadaku (1-100)?",

91:"Kalau aku memelukmu, apa reaksimu?",
92:"Apa yang ingin kamu katakan kepadaku sekarang?",
93:"Kalau aku menyatakan perasaan, apa jawabanmu?",
94:"Apa hal yang ingin kamu lakukan bersamaku besok?",
95:"Apa harapanmu untuk kita?",
96:"Apa janji yang ingin kamu pegang?",
97:"Kalau kita bersama selamanya, kamu siap?",
98:"Apa satu kata yang menggambarkan aku?",
99:"Apa sebenarnya perasaanmu kepadaku? ❤️",
100:"💌 Selamat! Perjalanan ini selesai. Maukah kamu terus berjalan bersamaku? ❤️"

};
function cekPertanyaan(){

    if(pertanyaan[posisi]){

        popup.style.display = "flex";
        popupText.innerHTML = pertanyaan[posisi];

    }

}

tutupPopup.onclick = function(){

    popup.style.display = "none";

}
kirimJawabanPopup.onclick = function(){

    const jawaban = jawabanPopup.value;

    if(jawaban == ""){
        alert("Jawab dulu ya ❤️");
        return;
    }

    alert("Jawaban berhasil dikirim 💖");

    popup.style.display = "none";

    jawabanPopup.value = "";

};
function pindahPion() {

    document.querySelectorAll(".box").forEach(box => {
        if (box.contains(player)) {
            box.removeChild(player);
        }
    });

    document.querySelectorAll(".box")[100 - posisi].appendChild(player);

}
