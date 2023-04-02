const images = [
  "images/meme1.jpg",
  "images/meme2.jpg",
  "images/meme3.jpg"
];

const button = document.getElementById("generate");
const meme = document.getElementById("meme");

function generateMeme() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  meme.src = randomImage;
  meme.style.display = "block";
}


button.addEventListener("click", generateMeme);
