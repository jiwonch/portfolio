// split 효과 사용하기
Splitting();


// 가로 스크롤
var horizon = $(".box").length;
$(".box").on("mousewheel DOMMouseScroll", function (e) {
    e.preventDefault();
    var delta = 0;
    if (!event) event = window.event;
    if (event.wheelDelta) {
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;
    } else if (event.detail) delta = -event.detail / 3;

    if (delta < 0) {
        bx = $(this).index() + 1;
    } else {
        bx = $(this).index() - 1;
    }
    console.log(bx)


    if (bx == 0) {
        $(".tab").css({ "color": "#fff" });
        $(".tab_1").css({ "color": "red" });
    } else if (bx == 1) {
        $(".tab").css({ "color": "#fff" });
        $(".tab_2").css({ "color": "red" });
    } else if (bx == 2) {
        $(".tab").css({ "color": "#fff" });
        $(".tab_3").css({ "color": "red" });
    } else if (bx == 3) {
        $(".tab").css({ "color": "#fff" });
        $(".tab_4").css({ "color": "red" });
    } else if (bx == 4) {
        $(".tab").css({ "color": "#fff" });
        $(".tab_5").css({ "color": "red" });
    } else if (bx == 5) {
        $(".tab").css({ "color": "#fff" });
        $(".tab_6").css({ "color": "red" });
    } else if (bx == 6) {
        $(".tab").css({ "color": "#fff" });
        $(".tab_7").css({ "color": "red" });
    } else if (bx == 7) {
        $(".tab").css({ "color": "#fff" });
        $(".tab_8").css({ "color": "red" });
    } else if (bx == 8) {
        $(".tab").css({ "color": "#fff" });
        $(".tab_9").css({ "color": "red" });
    }

    if (bx >= horizon) {
        bx = horizon - 1;
    } else if (bx <= -1) {
        bx = 0;
    }
    $(".project").stop().animate({ left: -bx * 100 + "%" })

});



// $(".tab").click(function () {
//     $(".tab").css({ "color": "white" });
//     $(this).css({ "color": "red" });
// });

// page_go mouseover out
$(".pro_home_img h6").hide();
$(".homepage img").mouseover(function(){
    $(".page h6").stop().fadeIn(300);
}).mouseout(function(){
    $(".page h6").stop().fadeOut(100);
});
$(".code img").mouseover(function(){
    $(".gcode h6").stop().fadeIn(300);
}).mouseout(function(){
    $(".gcode h6").stop().fadeOut(100);
});
$(".docupdf img").mouseover(function(){
    $(".dpdf h6").stop().fadeIn(300);
}).mouseout(function(){
    $(".dpdf h6").stop().fadeOut(100);
});