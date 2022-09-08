

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
  mouseX = e.clientX; //|| e.touches[0].clientX;
};

window.addEventListener('mousemove', handleMouse);
window.addEventListener('touchstart', handleMouse);
window.addEventListener('touchmove', handleMouse);


// 글자 타이핑 효과 초성 중성 종성 분리 --> 코드 for문으로 줄이기
String.prototype.toKorChars = function () {
  var kCho = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'],
    kJung = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'],
    kJong = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'], cho, jung, jong;

  var str = this,
    cnt = str.length,
    chars = [],
    kCode;
  for (var i = 0; i < cnt; i++) {
    kCode = str.charCodeAt(i);
    if (kCode == 32) {
      chars.push(" ");
      continue;
    } //not korean
    if (kCode < 0xAc00 || kCode > 0xD7A3) {
      chars.push(str.charAt(i));
      continue;
    }
    kCode = str.charCodeAt(i) - 0xAC00;

    jong = kCode % 28; //jongsung
    jung = ((kCode - jong) / 28) % 21 // Jungsung
    cho = (((kCode - jong) / 28) - jung) / 21 //chosung

    // store stirng cho jong jung split (for typing)
    chars.push(kCho[cho]);
    chars.push(String.fromCharCode(44032 + (cho * 588) + (jung * 28)));
    if (kJong[jong] !== '') {
      chars.push(String.fromCharCode(44032 + (cho * 588) + (jung * 28) + jong));
    }
  }
  return chars;
}

// typing text
var tp1 = "안녕하세요 성장을 꿈꾸는 개발자 최지원입니다."
var tp2 = "제 포트폴리오 페이지에 방문하신 것을 환영합니다:)"
var tp3 = "이곳에서 프론트엔드 개발자를 꿈꾸며 작업한 결과물들을 확인하실 수 있습니다."
var tp4 = "여러분과 함께 개발하며 성장하고 싶습니다."
var typ1 = [], typ2 = [], typ3 = [], typ4 = [];
tp1 = tp1.split('');
tp2 = tp2.split('');
tp3 = tp3.split('');
tp4 = tp4.split('');

// to each split string
for (var i = 0; i < tp1.length; i++) {
  typ1[i] = tp1[i].toKorChars();
}

for (var i = 0; i < tp2.length; i++) {
  typ2[i] = tp2[i].toKorChars();
}

for (var i = 0; i < tp3.length; i++) {
  typ3[i] = tp3[i].toKorChars();
}

for (var i = 0; i < tp4.length; i++) {
  typ4[i] = tp4[i].toKorChars();
}

// to get to printing element
var tpele1 = document.getElementsByClassName("tp1")[0];
var tpele2 = document.getElementsByClassName("tp2")[0];
var tpele3 = document.getElementsByClassName("tp3")[0];
var tpele4 = document.getElementsByClassName("tp4")[0];

var text = "";
var i = 0;
var j = 0;

// number amount string
var inum1 = typ1.length;
var inum2 = typ2.length;
var inum3 = typ3.length;
var inum4 = typ4.length;

// to use setInterval repeatdely printing
var inter = setInterval(typi, 100);
var inter2;
var inter3;
var inter4;

function typi() {
  tpele1.classList.add("csor");
  if (i <= inum1 - 1) {
    var jnum1 = typ1[i].length;
    tpele1.innerHTML = text + typ1[i][j];
    j++;
    if (j == jnum1) {
      text += typ1[i][j - 1];
      i++;
      j = 0;
    }
  } else {
    clearInterval(inter);
    text = "";
    i = 0;
    j = 0;

    setTimeout(function () {
      tpele1.classList.remove("csor");
      setTimeout(function () {
        tpele2.classList.add("csor");
        setTimeout(function () {
          inter2 = setInterval(typi2, 100);
        }, 100);
      }, 100);
    }, 100);
  }
}

function typi2() {
  if (i <= inum2 - 1) {
    var jnum2 = typ2[i].length;
    tpele2.innerHTML = text + typ2[i][j];
    j++;
    if (j == jnum2) {
      text += typ2[i][j - 1];
      i++;
      j = 0;
    }
  } else {
    clearInterval(inter2);
    text = "";
    i = 0;
    j = 0;

    setTimeout(function () {
      tpele2.classList.remove("csor");
      setTimeout(function () {
        tpele3.classList.add("csor");
        setTimeout(function () {
          inter3 = setInterval(typi3, 100);
        }, 100);
      }, 100);
    }, 100);
  }
}

function typi3() {
  if (i <= inum3 - 1) {
    var jnum3 = typ3[i].length;
    tpele3.innerHTML = text + typ3[i][j];
    j++;
    if (j == jnum3) {
      text += typ3[i][j - 1];
      i++;
      j = 0;
    }
  } else {
    clearInterval(inter3);
    text = "";
    i = 0;
    j = 0;

    setTimeout(function () {
      tpele3.classList.remove("csor");
      setTimeout(function () {
        tpele4.classList.add("csor");
        setTimeout(function () {
          inter4 = setInterval(typi4, 100);
        }, 100);
      }, 100);
    }, 100);
  }
}

function typi4() {
  if (i <= inum4 - 1) {
    var jnum4 = typ4[i].length;
    tpele4.innerHTML = text + typ4[i][j];
    j++;
    if (j == jnum4) {
      text += typ4[i][j - 1];
      i++;
      j = 0;
    }
  } else {
    clearInterval(inter4);
  }
}

