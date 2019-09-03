const meme = {
  src: "assets/Distracted-Boyfriend.jpg",
  texts: ["VSCode", "DEV", "CodePen"]
};

export function setSrc(value) {
  meme.src = value;
  log();
}

export function setText(index, value) {
  meme.texts[index] = value;
  log();
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
