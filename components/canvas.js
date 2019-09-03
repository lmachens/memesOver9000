import { getText } from "./meme.js";

const previewCanvas = document.querySelector(".preview__canvas");
const previewCanvasContext = previewCanvas.getContext("2d");
const generatorImage = document.querySelector(".generator__img");

export function updatePreview() {
  previewCanvas.width = generatorImage.naturalWidth;
  previewCanvas.height = generatorImage.naturalHeight;

  previewCanvasContext.clearRect(
    0,
    0,
    previewCanvas.width,
    previewCanvas.height
  );

  previewCanvasContext.drawImage(
    generatorImage,
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
  previewCanvasContext.fillText(getText(0), 400, 600);
  previewCanvasContext.fillText(getText(1), 840, 390);
  previewCanvasContext.fillText(getText(2), 1220, 510);
}
