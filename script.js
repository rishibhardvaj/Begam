// Countdown Timer
let countDownDate = new Date("Sep 19, 2024 00:00:00").getTime();
const surpriseSection = document.getElementById("surprise-section");
const downloadLink = document.getElementById("download-link");
const timerElement = document.getElementById("timer");

// Update the countdown every second
let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    if (distance < 0) {
        clearInterval(x);
        timerElement.innerHTML = "Happy Birthday, Saher!";
        surpriseSection.style.display = "block";
        downloadLink.style.display = "block"; // Show the download button
    } else {
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timerElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }
}, 1000);

// Play Background Music
const audio = new Audio('background-music.mp3'); // Replace with your music file path
audio.loop = true;
audio.play();

// Handle Handwritten Letter Download
const today = new Date();
const birthday = new Date('2024-09-19'); // Update with Saher's birthday
if (today < birthday) {
    downloadLink.style.display = 'none'; // Hide the download link before the birthday
} else {
    downloadLink.style.display = 'block'; // Show the download link after the birthday
}