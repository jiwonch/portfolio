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
const scrollPorgressTag = document.querrySelector('.scroll_progress')
const scrollProgressTxt = document.querrySelector('.scroll_progress p')
const bodyTag = document.querrySelector('body')

document.addEventListener('scroll', () => {
    const pixels = window.pageYOffset
    const pageHeight = bodyTag.getBoundingClientRect().height
    const totalHeight = pageHeight - window.innerHeight
    const percentage = pixels / totalHeight

    scrollPorgressTag.style.width = `${100 * percentage}%`

    if (pixels > 0){
        scrollProgressTxt.innerHTML = `${Math.floor(100 * percentage)}` + '%'
    }

    else {
        scrollProgressTxt.innerHTML = ''
    }
})