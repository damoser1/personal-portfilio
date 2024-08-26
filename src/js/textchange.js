const texts = ["One Pixel at a Time.", "digital dreams into reality!"];
const additionalTexts = ["Creating Engaging Interfaces,", "Building your "];
let textIndex = 0;
let charIndex = 0;

function typeWriterEffect() {
    const textElement = document.getElementById("typing-text");
    textElement.innerText = texts[textIndex].slice(0, charIndex);
    charIndex++;

    if (charIndex <= texts[textIndex].length) {
        setTimeout(typeWriterEffect, 100);
    } else {
        setTimeout(resetTypewriter, 2000);
    }
}

function resetTypewriter() {
    charIndex = 0;
    textIndex = (textIndex + 1) % texts.length;
    
    const additionalTextElement = document.getElementById("additional-text");
    additionalTextElement.innerText = additionalTexts[textIndex];
    additionalTextElement.style.opacity = 1; // Ensure the additional text is visible

    typeWriterEffect();
}

document.addEventListener("DOMContentLoaded", () => {
    const additionalTextElement = document.getElementById("additional-text");
    additionalTextElement.innerText = additionalTexts[0];
    additionalTextElement.style.opacity = 1; // Make the text visible from the start

    typeWriterEffect();
});