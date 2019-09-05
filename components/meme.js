import { setItem, getItem } from "./storage.js";
import { getMemes } from "./memes.js";
import { updatePreview } from "./canvas.js";

function loadMeme() {
  // const storageMeme = getItem("memeOver9000");
  // if (storageMeme) {
  //   return storageMeme;
  // } else {
  //   return {
  //     src: "assets/Distracted-Boyfriend.jpg",
  //     texts: ["VSCode", "DEV", "CodePen"]
  //   };
  // }
  const meme = getItem("memeOver9000") || getMemes()[0];
  return meme;
}
let meme = loadMeme();

export function setMeme(newMeme) {
  meme = newMeme;
  setItem("memeOver9000", meme);
}

export function setText(index, value) {
  meme.texts[index] = value;
  setItem("memeOver9000", meme);
}

export function getSrc() {
  return meme.src;
}

export function getText(index) {
  return meme.texts[index];
}

export function getTexts() {
  return meme.texts;
}

export function getPositions() {
  return meme.positions;
}

const inputWrapper = document.querySelector(".inputwrapper");
export function renderMemeInputs() {
  inputWrapper.innerHTML = "";
  meme.texts.forEach((text, index) => {
    /* generate
      <input
        id="text-1"
        class="inputwrapper__input"
        type="text"
        placeholder="Enter Text 1"
      />
    */
    const input = document.createElement("input");
    input.classList = "inputwrapper__input";
    input.type = "text";
    input.placeholder = `Enter Text ${index + 1}`;
    input.value = text;

    input.addEventListener("input", () => {
      setText(index, input.value);
      updatePreview();
    });

    inputWrapper.appendChild(input);
  });
}
