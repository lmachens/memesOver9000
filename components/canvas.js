import { getSrc, getTexts, getPositions } from "./meme.js";

const previewCanvas = document.querySelector(".preview__canvas");
const previewCanvasContext = previewCanvas.getContext("2d");

function render(memeImage) {
  previewCanvas.width = memeImage.naturalWidth;
  previewCanvas.height = memeImage.naturalHeight;

  previewCanvasContext.clearRect(
    0,
    0,
    previewCanvas.width,
    previewCanvas.height
  );

  previewCanvasContext.drawImage(
    memeImage,
    0,
    0,
    previewCanvas.width,
    previewCanvas.height
  );

  previewCanvasContext.font = "60px Arial";
  previewCanvasContext.fillStyle = "white";
  previewCanvasContext.textAlign = "center";
  previewCanvasContext.shadowColor = "black";
  previewCanvasContext.shadowBlur = 6;
  previewCanvasContext.shadowOffsetX = 3;
  previewCanvasContext.shadowOffsetY = 3;

  const textPositions = getPositions();
  getTexts().forEach((text, index) => {
    previewCanvasContext.fillText(
      text,
      textPositions[index].x,
      textPositions[index].y
    );
  });
}

export function updatePreview() {
  const memeSrc = getSrc();
  const memeImage = new Image();
  memeImage.src = memeSrc;

  memeImage.addEventListener("load", () => {
    render(memeImage);
  });
}
