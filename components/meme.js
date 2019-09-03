import { setItem, getItem } from "./storage.js";

const storageMeme = getItem("memeOver9000");
let meme;
if (storageMeme) {
  meme = storageMeme;
} else {
  meme = {
    src: "assets/Distracted-Boyfriend.jpg",
    texts: ["VSCode", "DEV", "CodePen"]
  };
}

// Alternative for lines 3-12
// const meme = getItem("meme") || {
//   src: "assets/Distracted-Boyfriend.jpg",
//   texts: ["VSCode", "DEV", "CodePen"]
// };

export function setSrc(value) {
  meme.src = value;
  log();
  setItem("memeOver9000", meme);
}

export function setText(index, value) {
  meme.texts[index] = value;
  log();
  setItem("memeOver9000", meme);
}

export function getSrc() {
  return meme.src;
}

export function getText(index) {
  return meme.texts[index];
}

function log() {
  console.log(meme);
}
