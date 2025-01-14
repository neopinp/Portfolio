/* CANVAS - FALLING TEXT */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
// Resize canvas to match window size
function setCanvasSize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
setCanvasSize();
// Resize columns per Canvas Size
function resetColumns() {
  columns = Math.floor(canvas.width / fontSize); // Recalculate columns
  drops = Array(columns).fill(0); // Reset drops
}
setInterval(drawMatrix, 30);

// RESET CANVAS + COLUMNS = WINDOW SIZE 
window.addEventListener("resize", () => {
  setCanvasSize();
  resetColumns(); // Ensure columns and drops adjust as well
});

/* GENERATE FALLING TEXT */
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";
const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize); 
let drops = Array(columns).fill(0);
function drawMatrix() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  ctx.shadowColor = '#0F0'
  ctx.fillStyle = "#0F0";
  ctx.font = `bold ${fontSize}px 'Courier New', monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0; // Reset drop to the top randomly
    }
    drops[i]++; // Move text down
  }
}

/* PILL FUNCTIONS */
function blackOut() {
  // Add div element to cover the screen
  const blackout = document.createElement("div");
  blackout.classList.add("blackOut");
  document.body.appendChild(blackout);

  // An option to reverse blackout / Reverse blue pill decision
  blackout.addEventListener("click", function () {
    document.body.removeChild(blackout);
  });
}

function goToPortfolio() {
  // Add functionality for portfolio navigation if needed
}
