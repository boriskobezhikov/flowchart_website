const canvas = document.getElementById('canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

let isDrawing = false;
let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  startX = e.clientX - canvas.offsetLeft;
  startY = e.clientY - canvas.offsetTop;
});

canvas.addEventListener('mousemove', (e) => {
  if (!isDrawing) return;
  endX = e.clientX;
  endY = e.clientY - 100;
  ctx?.beginPath();
  ctx?.moveTo(startX, startY);
  ctx?.bezierCurveTo(startX,startY+50,endX,endY-50,endX,endY)
  ctx?.stroke();
});

canvas.addEventListener('mouseup', () => {
  isDrawing = false;
  ctx?.stroke();
});