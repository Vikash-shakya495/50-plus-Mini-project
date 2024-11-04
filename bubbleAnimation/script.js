const bubbles = document.querySelectorAll('.bubble');

bubbles.forEach(bubble => {
    
    const randomTop = Math.random() * 50; 
    const randomLeft = Math.random() * 80; 
    bubble.style.backgroundColor = `rgb(
            ${Math.random() * 255}, 
            ${Math.random() * 255}, 
            ${Math.random() * 255}, 
            ${Math.random()*1})`
    bubble.style.top = `${randomTop}%`;
    bubble.style.left = `${randomLeft}%`;
    
    const moveBubble = () => {
        const newTop = Math.random() * 100; 
        const newLeft = Math.random() * 100; 
        
        // Move the bubble
        bubble.style.transform = `translate(${newLeft}%, ${newTop}%)`;
        
        setTimeout(moveBubble, 1000); 
    };

    moveBubble();
});
