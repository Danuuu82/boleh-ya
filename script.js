(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json";

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) return;
        const data = await response.json();

        if (currentVersion !== data.version) {
            alert(data.updateMessage);
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

const messages = [
    "serius?", "beneran nih gaboleh??", "coba pikirin lagi?", "serius gamau kirim?...",
    "ayolah pikirin lagi!", "klik sebelahny aja...", "pelit banget masa gaboleh...",
    "yah bakal sedih sih kalo gaboleh...", "okedeh gabakal tanya lagi...", "bercanda hihihi, klik boleh please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    yesButton.style.fontSize = `${parseFloat(window.getComputedStyle(yesButton).fontSize) * 1.5}px`;
}

function handleYesClick() {
    const music = document.getElementById('bg-music');
    if (music) {
        localStorage.setItem('musicTime', music.currentTime);
    }
    window.location.href = "yes_page.html";
}

window.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bg-music");

    if (!document.referrer.includes("yes_page.html")) {
        localStorage.removeItem("musicTime");
    }

    if (music) {
        music.volume = 0.5;
        const savedTime = parseFloat(localStorage.getItem('musicTime')) || 0;
        music.currentTime = savedTime;
        music.play().catch(err => console.error("Gagal autoplay musik:", err));
    }
});