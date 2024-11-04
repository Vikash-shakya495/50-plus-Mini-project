const button = document.getElementById("colorButton");
const tooltip = document.getElementById("tooltip");

// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to update the background color and display the color value
function updateBackgroundColor() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  tooltip.textContent = `${randomColor} (Press 'c' to copy)`;
}

// Event listener for the button click
button.addEventListener("click", updateBackgroundColor);

// Event listener to display the tooltip on 's' key press
document.addEventListener("keypress", (event) => {
  if (event.key === 's') {
    tooltip.style.display = "block";
    tooltip.style.left = "50%";
    tooltip.style.top = "50%";
    tooltip.style.transform = 'translate(-50%,-50%)';
    tooltip.style.padding = '20px 40px';
    tooltip.style.fontSize = '40px';
  }
});

// Event listener to copy the color value to the clipboard on 'c' key press
document.addEventListener("keypress", (event) => {
  if (event.key === 'c' && tooltip.style.display === "block") {
    navigator.clipboard.writeText(document.body.style.backgroundColor)
      .then(() => {
        tooltip.textContent = "Copied!";
        setTimeout(() => tooltip.style.display = "none", 1000); 
      })
      .catch(err => console.error("Failed to copy text: ", err));
  }
});
