// 인트로 화면 로딩 애니메이션
$(function(){
    var loading = $('#loader'),
    enterButton = loading.find('.enter_button');

    setTimeout(function(){
        loading.removeClass('hidden_loader');
    }, 800);

    enterButton.on('click', function(e){
        e.preventDefault();
        loading.addClass('hidder_loader').slideUp();
    })
})