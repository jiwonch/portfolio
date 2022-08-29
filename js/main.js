// 인트로 화면 로딩 애니메이션
$(function () {
    var loading = $('#loader'),
        enterButton = loading.find('.enter_button');

    setTimeout(function () {
        loading.removeClass('hidden_loader');
    }, 800);

    enterButton.on('click', function (e) {
        e.preventDefault();
        loading.addClass('hidder_loader').slideUp();
    })
})


// main 배경 색 gradient 변경

var mainbg = new Array(
    [240, 229, 222],
    [207, 240, 218],
    [171, 208, 206],
    [250, 218, 216]);

var stp = 0;

var colorIndices = [0, 1, 2, 3];
// 0: 현재 왼쪽 색 1: 다음 왼쪽 색 2: 현재 오른쪽 색 3: 다음 오른쪽 색

//transition 속도
var gradientSpeed = 0.002;

function updateGradient() {

    if ($ === undefined) return;

    var c0_0 = mainbg[colorIndices[0]];
    var c0_1 = mainbg[colorIndices[1]];
    var c1_0 = mainbg[colorIndices[2]];
    var c1_1 = mainbg[colorIndices[3]];

    var bstp = 1 - stp;
    var r1 = Math.round(bstp * c0_0[0] + stp * c0_1[0]);
    var g1 = Math.round(bstp * c0_0[1] + stp * c0_1[1]);
    var b1 = Math.round(bstp * c0_0[2] + stp * c0_1[2]);
    var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

    var r2 = Math.round(bstp * c1_0[0] + stp * c1_1[0]);
    var g2 = Math.round(bstp * c1_0[1] + stp * c1_1[1]);
    var b2 = Math.round(bstp * c1_0[2] + stp * c1_1[2]);
    var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

    $('#main').css({
        background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
    }).css({
        background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
    });

    stp += gradientSpeed;
    if (stp >= 1) {
        stp %= 1;
        colorIndices[0] = colorIndices[1];
        colorIndices[2] = colorIndices[3];

        //2가지 색상을 고르는데, 현재와 같은 것은 고르지 않음.
        colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (mainbg.length - 1))) % mainbg.length;
        colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (mainbg.length - 1))) % mainbg.length;

    }
}

setInterval(updateGradient, 8);


// main menu
Splitting();


// main menu_1 circle text

"use strict";

let time = 0;
let mouseX = window.innerWidth * 0.75;
let x = 0;

const opt = {
  radius: 200,
  radiusY: 0.5,
  maxSpeed: 0.03,
  maxRotation: 50,
  minOpacity: 0.3,
  spacer: '*'
};

const scale = (a, b, c, d, e) => {
  return (a - b) * (e - d) / (c - b) + d;
};

const lerp = (v0, v1, t) => {
  return v0 * (1 - t) + v1 * t;
};


let letter;

const createInvaders = () => {
  const word = document.querySelector('#main_1 .word');
  const Letters = word.innerHTML.replace(/\s/g, opt.spacer).split('').reverse();
  word.innerHTML = '';
  Letters.forEach(i => {
    const l = document.createElement('span');
    l.innerHTML = i;
    word.appendChild(l);
  });
  letter = document.querySelectorAll('#main_1 .word span');
};

createInvaders();

const animate = () => {
  if (!letter) return;
  x = lerp(x, mouseX / window.innerWidth, 0.1);
  const rotation = -opt.maxRotation + x * opt.maxRotation * 2;
  const speed = -opt.maxSpeed + x * opt.maxSpeed * 2;
  const modY = 1 + x * -2;
  time -= speed;
  letter.forEach((i, ind) => {
    const theta = 1 - ind / letter.length;
    const x = opt.radius * Math.sin(time + theta * Math.PI * 2);
    const y = opt.radius * opt.radiusY * Math.cos(modY + time + theta * Math.PI * 2);
    const s = scale(y, -opt.radius * opt.radiusY, opt.radius * opt.radiusY, opt.minOpacity, 1);
    Object.assign(i.style, {
      zIndex: Math.min(2, Math.max(-2, Math.ceil(y))),
      filter: `blur(${4 - 5 * s}px)`,
      opacity: s,
      transform: `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg)`
    });
  });
  requestAnimationFrame(animate);
};

animate();

const handleMouse = e => {
  mouseX = e.clientX || e.touches[0].clientX;
};

window.addEventListener('mousemove', handleMouse);
window.addEventListener('touchstart', handleMouse);
window.addEventListener('touchmove', handleMouse);