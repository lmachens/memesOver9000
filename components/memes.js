import { setMeme, renderMemeInputs } from "./meme.js";
import { updatePreview } from "./canvas.js";

const memes = [
  {
    src: "assets/Distracted-Boyfriend.jpg",
    title: "Distracted Boyfriend",
    texts: ["VSCode", "DEV", "CodePen"],
    positions: [
      {
        x: 400,
        y: 600
      },
      {
        x: 840,
        y: 390
      },
      {
        x: 1220,
        y: 510
      }
    ]
  },
  {
    src: "assets/Drake-Hotline-Bling.jpg",
    title: "Drake Hotline",
    texts: ["First", "Second"],
    positions: [
      {
        x: 860,
        y: 360
      },
      {
        x: 860,
        y: 900
      }
    ]
  }
];

export function getMemes() {
  return memes;
}

const generatorImages = document.querySelector(".generator__images");

export function renderMemeImages() {
  memes.forEach(meme => {
    /* create this element
       <img
            class="generator__img"
            src="assets/Distracted-Boyfriend.jpg"
            alt="Distracted Boyfriend"
          />
    */
    const img = document.createElement("img");
    img.classList = "generator__img";
    img.src = meme.src;
    img.alt = meme.title;
    img.addEventListener("click", () => {
      setMeme(meme);
      updatePreview();
      renderMemeInputs();
    });
    generatorImages.appendChild(img);
  });
}
