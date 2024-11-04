let span = document.querySelector("span");
const text = "Developers";

function typeWriterEffect() {
    span.textContent = "";

    for (let i = 0; i <= text.length; i++) {
        setTimeout(() => {
            span.textContent = text.slice(0, i); 
        }, i * 150); 
    }

    for (let i = 0; i <= text.length; i++) {
        setTimeout(() => {
            span.textContent = text.slice(0, text.length - i);
        }, (text.length + i) * 150); 
    }
}

typeWriterEffect(); 

setInterval(typeWriterEffect, text.length * 300 + 1000);
