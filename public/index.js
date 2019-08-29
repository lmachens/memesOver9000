"use strict";

const previewCanvas = document.querySelector(".preview__canvas");
const previewCanvasContext = previewCanvas.getContext("2d");

function updatePreview() {
  previewCanvasContext.fillStyle = "red";
  previewCanvasContext.fillRect(20, 140, 100, 100);
  previewCanvasContext.fillText("neuefische", 10, 10);
}

const generatorUpdate = document.querySelector(".generator__update");
generatorUpdate.addEventListener("click", updatePreview);
