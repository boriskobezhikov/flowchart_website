var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;
var isDrawing = false;
var startX = 0;
var startY = 0;
var endX = 0;
var endY = 0;
canvas.addEventListener('mousedown', function (e) {
    isDrawing = true;
    startX = e.clientX - canvas.offsetLeft;
    startY = e.clientY - canvas.offsetTop;
});
canvas.addEventListener('mousemove', function (e) {
    if (!isDrawing)
        return;
    endX = e.clientX;
    endY = e.clientY - 100;
    ctx === null || ctx === void 0 ? void 0 : ctx.beginPath();
    ctx === null || ctx === void 0 ? void 0 : ctx.moveTo(startX, startY);
    ctx === null || ctx === void 0 ? void 0 : ctx.bezierCurveTo(startX, startY + 50, endX, endY - 50, endX, endY);
    ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
});
canvas.addEventListener('mouseup', function () {
    isDrawing = false;
    ctx === null || ctx === void 0 ? void 0 : ctx.stroke();
});
