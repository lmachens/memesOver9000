"use strict";

const previewCanvas = document.querySelector(".preview__canvas");
const previewCanvasContext = previewCanvas.getContext("2d");

const text1 = document.querySelector("#text-1");
const text2 = document.querySelector("#text-2");
const text3 = document.querySelector("#text-3");

const generatorImage = document.querySelector(".generator__img");

function updatePreview() {
  previewCanvas.width = generatorImage.width * 4;
  previewCanvas.height = generatorImage.height * 4;

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
  previewCanvasContext.fillText(text1.value, 100, 60);
  previewCanvasContext.fillText(text2.value, 100, 100);
  previewCanvasContext.fillText(text3.value, 100, 160);
}

text1.addEventListener("input", updatePreview);
text2.addEventListener("input", updatePreview);
text3.addEventListener("input", updatePreview);

updatePreview();
