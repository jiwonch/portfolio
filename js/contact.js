"use strict";

const el = document.getElementById('canvas');
const ctx = el.getContext('2d');
const dpr = window.devicePixelRatio || 1;
const pi = Math.PI;
const points = 12;
const radius = 200 * dpr;
const h = 650 * dpr;
const w = 550 * dpr;
const center = {
    x: w / 2 * dpr,
    y: h / 2 * dpr
};
const circles = [];
const rangeMin = 1;
const rangeMax = 30;
const showPoints = true;
let mouseY = 0;
let tick = 0;
const gradient1 = ctx.createLinearGradient(0, 0, w, 0);
gradient1.addColorStop(0, '#A460ED');
gradient1.addColorStop(1, '#D6E5FA');
const gradient2 = ctx.createLinearGradient(0, 0, w, 0);
gradient2.addColorStop(0, '#A460ED');
gradient2.addColorStop(1, '#6867AC');
const gradient3 = ctx.createLinearGradient(0, 0, w, 0);
gradient3.addColorStop(0, '#9795f0');
gradient3.addColorStop(1, '#D6E5FA');
const gradient4 = ctx.createLinearGradient(0, 0, w, 0);
gradient4.addColorStop(0, '#6867AC');
gradient4.addColorStop(1, '#9795f0');
const gradients = [gradient1, gradient2, gradient3, gradient4];
window.addEventListener('mousemove', handleMove, true);

function handleMove(event) {
    mouseY = event.clientY;
}

ctx.scale(dpr, dpr);
el.width = w * dpr;
el.height = h * dpr;
el.style.width = w + 'px';
el.style.height = h + 'px'; 

for (var idx = 0; idx <= gradients.length - 1; idx++) {
    let swingpoints = [];
    let radian = 0;

    for (var u = 0; u < points; u++) {
        radian = pi * 2 / points * u;
        var ptX = center.x + radius * Math.cos(radian);
        var ptY = center.y + radius * Math.sin(radian);
        swingpoints.push({
            x: ptX,
            y: ptY,
            radian: radian,
            range: random(rangeMin, rangeMax),
            phase: 0
        });
    }

    circles.push(swingpoints);
} 


function swingCircle() {
    ctx.clearRect(0, 0, w * dpr, h * dpr);
    ctx.globalAlpha = 1; 

    ctx.globalCompositeOperation = 'screen';

    for (let k = 0; k < circles.length; k++) {
        let swingpoints = circles[k];

        for (var u = 0; u < swingpoints.length; u++) {
            swingpoints[u].phase += random(1, 10) * -0.01;
            let phase = 4 * Math.sin(tick / 65);

            if (mouseY !== 0) {
                phase = mouseY / 200 + 1;
            }

            var r = radius + swingpoints[u].range * phase * Math.sin(swingpoints[u].phase) - rangeMax;
            swingpoints[u].radian += pi / 360;
            var ptX = center.x + r * Math.cos(swingpoints[u].radian);
            var ptY = center.y + r * Math.sin(swingpoints[u].radian);

            if (showPoints === true) {
                ctx.strokeStyle = '#96fbc4';
                ctx.beginPath();
                ctx.arc(ptX, ptY, 2 * dpr, 0, pi * 2, true);
                ctx.closePath();
                ctx.stroke();
            }

            swingpoints[u] = {
                x: ptX,
                y: ptY,
                radian: swingpoints[u].radian,
                range: swingpoints[u].range,
                phase: swingpoints[u].phase
            };
        }

        const fill = gradients[k];
        drawCurve(swingpoints, fill);
    }

    tick++;
    requestAnimationFrame(swingCircle);
}

requestAnimationFrame(swingCircle); 

function drawCurve(pts, fillStyle) {
    ctx.fillStyle = fillStyle;
    ctx.beginPath();
    ctx.moveTo((pts[cycle(-1, points)].x + pts[0].x) / 2, (pts[cycle(-1, points)].y + pts[0].y) / 2);

    for (var u = 0; u < pts.length; u++) {
        ctx.quadraticCurveTo(pts[u].x, pts[u].y, (pts[u].x + pts[cycle(u + 1, points)].x) / 2, (pts[u].y + pts[cycle(u + 1, points)].y) / 2);
    }

    ctx.closePath();
    ctx.fill();
} 


function cycle(num1, num2) {
    return (num1 % num2 + num2) % num2;
} 


function random(num1, num2) {
    var max = Math.max(num1, num2);
    var min = Math.min(num1, num2);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}