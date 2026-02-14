const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const mainImage = document.getElementById("mainImage");
const card = document.querySelector('.card');
const buttons = document.querySelector('.buttons');
const title = document.querySelector('.card h2');

const imgInit = "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdms1aWZlbHhmcHB2YzNmcXBnMXk4dnRlMzI1M244c2wwMXVhNm53YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LHlbHhUamxFxo5F878/giphy.gif";
const imgNo1 = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHBvajQxdGkycHg5OGF0M3V1dWtiYWRkMXk0YXo0bWIxOXYxOWcwbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/z3FfRtL18oZ5CwR4A0/giphy.gif";
const imgNo2 = "https://imgs.search.brave.com/qZ6q-iTV_mwwt7ZnRkZQtahgy0lgGLeJOVpLQCVecaY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS50ZW5vci5jb20v/OEF1V2dEbWdQQklB/QUFBTS9iYW9uZ29j/LWR0Ym5jdXRpLmdp/Zg.gif";
const imgYes = "https://imgs.search.brave.com/OVPZbV2fo8cZ8W7MxcNDvUWNSq3mxcjNTN5vTxi3YwI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U4L2Jh/L2RhL2U4YmFkYTMz/ODUxNTQ4N2VhY2Jl/MDY1M2EyNDRiNDI2/LmpwZw";

let noCount = 0;
let yesGrow = 1;
let noShrink = 1;

mainImage.style.display = "block";
mainImage.src = imgInit;

noBtn.addEventListener("click", () => {
  if (noCount === 0) mainImage.src = imgNo1;
  else if (noCount === 1) mainImage.src = imgNo2;
  noCount++;
  yesGrow += 0.15;
  yesBtn.style.transform = `scale(${yesGrow})`;
  yesBtn.classList.add("grow");
  noShrink -= 0.1;
  noBtn.style.transform = `scale(${noShrink})`;
  noBtn.classList.add("shrink");
});

yesBtn.addEventListener("click", () => {
  mainImage.src = imgYes;
  confetti({
    particleCount: 260,
    spread: 120,
    origin: { y: 0.65 }
  });
  buttons.style.display = 'none';
  if (title) title.style.display = 'none';
  const text = document.createElement('div');
  text.style.marginTop = '18px';
  text.style.fontSize = '2.2em';
  text.style.fontWeight = 'bold';
  text.style.textAlign = 'center';
  text.style.color = '#d14';
  text.style.background = 'transparent';
  text.style.position = 'static'; 
  text.textContent = 'HEHEHEHE so you love me';
  card.appendChild(text);
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 22 + 14 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";
  heart.style.opacity = Math.random() * 0.5 + 0.4;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 380);
