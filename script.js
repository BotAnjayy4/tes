let ftom = 0, jikapr = 1, ftganti = 0, flag = 1, fungsi = 0, fungsiAwal = 0;
let audio = new Audio(document.getElementById("linkmp3").innerHTML);
let pesanwhatsapp = document.getElementById("pesanWA").innerHTML;

function ngetikAwal() {
    let aw = 0, ngetika = document.getElementById("ket").innerHTML;
    document.getElementById("ket").innerHTML = "";
    function type() {
        if (aw < ngetika.length) {
            document.getElementById("ket").innerHTML += ngetika.charAt(aw);
            aw++;
            setTimeout(type, 50);
        }
        if (aw == ngetika.length) {
            fungsiAwal = 1;
        }
    }
    type();
}

function mulaikonten() {
    if (fungsiAwal == 1) {
        audio.play();
        setTimeout(mulaihitung, 1000);
        fungsiAwal = 0;
        document.getElementById("ket").style.display = "none";
        document.getElementById("Content").style.opacity = 1;
        document.getElementById("bodyblur").style.opacity = 0.6;
    }
}

function fangka() {
    document.getElementById("angka").innerHTML = Math.floor(Math.random() * 25) + 5;
}

function henti() {
    clearInterval(tmer);
    setTimeout(ngetikC, 1200);
}

function mulaihitung() {
    let timeleft = 7;
    let downloadTimer = setInterval(function () {
        timeleft--;
        document.getElementById("ctimer").textContent = timeleft;
        if (timeleft <= 0) clearInterval(downloadTimer);
        if (timeleft == 0) {
            document.getElementById("wallpaper").style.transform = "scale(1)";
            document.getElementById("wallpaper").style.opacity = 1;
            setInterval(createHeart, 200);
        }
    }, 1000);
}

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = (Math.random() * 90) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
    document.body.appendChild(heart);
}

setInterval(() => {
    let hearts = document.querySelectorAll(".fa-heart");
    if (hearts.length > 100) hearts[0].remove();
}, 100);

document.addEventListener("DOMContentLoaded", ngetikAwal);

