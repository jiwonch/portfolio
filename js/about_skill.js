// split 효과 사용하기
Splitting();

// front skill content fade
$(document).ready(function () {
    $("#front_html").mouseover(function () {
        $(".ft_html").stop().fadeIn();
    }).mouseout(function () {
        $(".ft_html").stop().hide();
    });

    $("#front_css").mouseover(function () {
        $(".ft_css").stop().fadeIn();
    }).mouseout(function () {
        $(".ft_css").stop().hide();
    });

    $("#front_scss").mouseover(function () {
        $(".ft_scss").stop().fadeIn();
    }).mouseout(function () {
        $(".ft_scss").stop().hide();
    });

    $("#front_js").mouseover(function () {
        $(".ft_js").stop().fadeIn();
    }).mouseout(function () {
        $(".ft_js").stop().hide();
    });

    $("#front_jquery").mouseover(function () {
        $(".ft_jquery").stop().fadeIn();
    }).mouseout(function () {
        $(".ft_jquery").stop().hide();
    });

    $("#front_ajax").mouseover(function () {
        $(".ft_ajax").stop().fadeIn();
    }).mouseout(function () {
        $(".ft_ajax").stop().hide();
    });

    $("#front_vue").mouseover(function () {
        $(".ft_vue").stop().fadeIn();
    }).mouseout(function () {
        $(".ft_vue").stop().hide();
    });
});

// back & database content fade
$(document).ready(function () {
    $("#back_java").mouseover(function () {
        $(".bt_java").stop().fadeIn();
    }).mouseout(function () {
        $(".bt_java").stop().hide();
    });

    $("#back_c").mouseover(function () {
        $(".bt_c").stop().fadeIn();
    }).mouseout(function () {
        $(".bt_c").stop().hide();
    });

    $("#back_python").mouseover(function () {
        $(".bt_python").stop().fadeIn();
    }).mouseout(function () {
        $(".bt_python").stop().hide();
    });

    $("#back_php").mouseover(function () {
        $(".bt_php").stop().fadeIn();
    }).mouseout(function () {
        $(".bt_php").stop().hide();
    });

    $("#back_linux").mouseover(function () {
        $(".bt_linux").stop().fadeIn();
    }).mouseout(function () {
        $(".bt_linux").stop().hide();
    });

    $("#db_mysql").mouseover(function () {
        $(".bt_mysql").stop().fadeIn();
    }).mouseout(function () {
        $(".bt_mysql").stop().hide();
    });

    $("#db_firebase").mouseover(function () {
        $(".bt_firebase").stop().fadeIn();
    }).mouseout(function () {
        $(".bt_firebase").stop().hide();
    });
});

// design & etc content fade
$(document).ready(function () {
    $("#design_photoshop").mouseover(function () {
        $(".etc_photoshop").stop().fadeIn();
    }).mouseout(function () {
        $(".etc_photoshop").stop().hide();
    });

    $("#design_illustrator").mouseover(function () {
        $(".etc_illustrator").stop().fadeIn();
    }).mouseout(function () {
        $(".etc_illustrator").stop().hide();
    });

    $("#etc_gcp").mouseover(function () {
        $(".etc_gcp").stop().fadeIn();
    }).mouseout(function () {
        $(".etc_gcp").stop().hide();
    });

    $("#etc_aws").mouseover(function () {
        $(".etc_aws").stop().fadeIn();
    }).mouseout(function () {
        $(".etc_aws").stop().hide();
    });

    $("#etc_android").mouseover(function () {
        $(".etc_android").stop().fadeIn();
    }).mouseout(function () {
        $(".etc_android").stop().hide();
    });

    $("#etc_github").mouseover(function () {
        $(".etc_github").stop().fadeIn();
    }).mouseout(function () {
        $(".etc_github").stop().hide();
    });
});


// scroll percentage
// const scrollPorgressTag = document.querrySelector('.scroll_progress')
// const scrollProgressTxt = document.querrySelector('.scroll_progress p')
// const bodyTag = document.querrySelector('body')

// document.addEventListener('scroll', () => {
//     const pixels = window.pageYOffset
//     const pageHeight = bodyTag.getBoundingClientRect().height
//     const totalHeight = pageHeight - window.innerHeight
//     const percentage = pixels / totalHeight

//     scrollPorgressTag.style.width = `${100 * percentage}%`

//     if (pixels > 0) {
//         scrollProgressTxt.innerHTML = `${Math.floor(100 * percentage)}` + '%'
//     }

//     else {
//         scrollProgressTxt.innerHTML = ''
//     }
// })

// accordion profile
var accordionBtn = document.querySelectorAll('.accordionTitle');
var allTexts = document.querySelectorAll('.text');
var accIcon = document.querySelectorAll('.accIcon');

// event
accordionBtn.forEach(function (el) {
    el.addEventListener('click', toggleAccordion)

});

// accordion toggle
function toggleAccordion(el) {
    var targetText = el.currentTarget.nextElementSibling.classList;
    var targetAccIcon = el.currentTarget.children[0];
    var target = el.currentTarget;

    if (targetText.contains('show')) {
        targetText.remove('show');
        targetAccIcon.classList.remove('anime');
        target.classList.remove('accordionTitleActive');
        $("#my_text").show();
    }
    else {
        accordionBtn.forEach(function (el) {
            el.classList.remove('accordionTitleActive');

            allTexts.forEach(function (el) {
                el.classList.remove('show');
                $("#my_text").hide();
            })

            accIcon.forEach(function (el) {
                el.classList.remove('anime');
            })

        })

        targetText.add('show');
        target.classList.add('accordionTitleActive');
        targetAccIcon.classList.add('anime');
    }

}

// $(document).ready(function(){
//     var opa = $(".show").css("opacity");

//     if(opa == 1){
//         $("#my_text").hide();
//     } else if(opa == 0){
//         $("#my_text").show();
//     }
// });

const parl_p1 = document.querySelector('.parel_1');
const parl_p2 = document.querySelector('.parel_2');
const parl_p3 = document.querySelector('.parel_3');
const parl_p4 = document.querySelector('.parel_4');

const txt_p1 = 'CHOIJIWON PORTFOLIO CHOIJIWON PORTFOLIO CHOIJIWON PORTFOLIO'.split(' ');
const txt_p2 = "Hello, I'm a frontend developer who is both cautious and challenging. Hello, I'm a frontend developer who is both cautious and challenging.".split(' ');
const txt_p3 = "I always want to be a person who is not afraid of trying. I always want to be a person who is not afraid of trying.".split(' ');
const txt_p4 = 'I can communicate with other people smoothly. I can communicate with other people smoothly. '.split(' ');

let p_ct1 = 0;
let p_ct2 = 0;
let p_ct3 = 0;
let p_ct4 = 0;

initTexts(parl_p1, txt_p1);
initTexts(parl_p2, txt_p2);
initTexts(parl_p3, txt_p3);
initTexts(parl_p4, txt_p4);

function initTexts(element, txt_p) {
    txt_p.push(...txt_p);
    for (let m =0; m < txt_p.length; m++) {
        element.innerText += `${txt_p[m]}\u00A0\u00A0\u00A0\u00A0`;
    }
}

function mqT(p_ct, element, direction) {
    if(p_ct > element.scrollWidth / 2) {
        element.style.transform = `translate3d(0, 0, 0)`;
        p_ct = 0;
    }
    element.style.transform = `translate3d(${direction * p_ct}px, 0, 0)`;

    return p_ct;
}

function anm() {
    p_ct1++;
    p_ct2++;
    p_ct3++;
    p_ct4++;

    p_ct1 = mqT(p_ct1, parl_p1, -1);
    p_ct2 = mqT(p_ct2, parl_p2, 1);
    p_ct3 = mqT(p_ct3, parl_p3, -1);
    p_ct4 = mqT(p_ct4, parl_p4, 1);

    window.requestAnimationFrame(anm)
}

function scrollHandler() {
    p_ct1 += 15
    p_ct2 += 15
    p_ct3 += 15
    p_ct4 += 15
}

window.addEventListener('scroll', scrollHandler)
anm();

// skill 나타나기
$(document).ready(function(){
    $('#front, #back, #etc, #tool').css({opacity:0});

    $(window).scroll(function(){
        var vw = $(this).scrollTop();

        if(vw >= 1318) {
            $('#front').animate({opacity:1}, 1000);
        }
        if(vw >= 1918) {
            $('#back').animate({opacity:1}, 1000);
        }
        if(vw >= 2610) {
            $('#etc').animate({opacity:1}, 1000);
        }
        if(vw >= 3118) {
            $('#tool').animate({opacity:1}, 1000);
        }
    })
});

