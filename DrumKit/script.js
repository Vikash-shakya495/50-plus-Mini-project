// Function to play sound based on key press
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    
    if (!audio) return; // Stop function if no audio for the key
  
    key.classList.add('playing'); // Add animation class
    audio.currentTime = 0; // Rewind the sound to the start
    audio.play();
  }
  
  // Function to remove transition after the key press
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // Skip if it's not a transform
    this.classList.remove('playing'); // Remove the class
  }
  
  // Listen for key press events
  window.addEventListener('keydown', playSound);
  
//   // Get all keys and add an event listener for transition end
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  