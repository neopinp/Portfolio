/* CANVAS - FALLING TEXT - WINDOW */
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

  ctx.shadowColor = "#0F0";
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
function showPills() {
  const pills = document.querySelectorAll(".pill-container");
  pills.forEach((pill) => {
    pill.classList.add("visible");
  });
}
setTimeout(showPills, 5000);

function takeBluePill() {
  // REMOVES OPTION TO TAKE PILLS
  const pills = document.querySelectorAll(".pill-container");
  pills.forEach((pill) => {
    pill.classList.remove("visible");
  });
}
function takeRedPill() {
  // Add functionality for portfolio navigation if needed
}

// DARKEN BACKGROUND + OPP. PILL ON HOVER
const overlay = document.getElementById("matrix-overlay");

document.querySelectorAll(".pill-container").forEach((pill) => {
  pill.addEventListener("mouseenter", () => {
    overlay.style.background = "rgba(0,0,0,.8)";
  });
  pill.addEventListener("mouseleave", () => {
    overlay.style.background = "rgba(0,0,0,0)";
  });
});

// fade on BLUE PILL
// Select pills
const bluePill = document.querySelector(".pill-container.blue");
const redPill = document.querySelector(".pill-container.red");

// Add hover event to the blue pill to fade out the red pill
bluePill.addEventListener("mouseenter", () => {
  redPill.style.opacity = "0.1"; // Fade out the red pill
  redPill.style.transition = "opacity .1s ease"
});
bluePill.addEventListener("mouseleave", () => {
  redPill.style.opacity = ".7"; // Restore red pill opacity
});

// Add hover event to the red pill to fade out the blue pill
redPill.addEventListener("mouseenter", () => {
  bluePill.style.opacity = "0.1"; // Fade out the blue pill
  bluePill.style.transition = "opacity .1s ease"

});
redPill.addEventListener("mouseleave", () => {
  bluePill.style.opacity = ".7"; // Restore blue pill opacity
});
