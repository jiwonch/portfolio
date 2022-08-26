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