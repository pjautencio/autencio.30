
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing-text").textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
window.onload = typeEffect;

// Secret Message Toggle
function revealMessage() {
    const secret = document.getElementById("secret-message");
    secret.style.display = secret.style.display === "none" ? "block" : "none";
}
