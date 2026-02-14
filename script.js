const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const mainImage = document.getElementById("mainImage");
const card = document.querySelector('.card');
const buttons = document.querySelector('.buttons');
const title = document.querySelector('.card h2');

const imgInit = "";
const imgNo1 = "";
const imgNo2 = "";
const imgYes = "";

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
